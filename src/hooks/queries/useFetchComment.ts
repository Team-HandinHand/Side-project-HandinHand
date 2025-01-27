import { fetchComments } from '@/service/comments/fetchComment'
import { Comment } from '@/types/commentDetail'
import { useQuery } from '@tanstack/react-query'

const useFetchComment = ({
  userId,
  mediaId
}: {
  userId: string
  mediaId: string
}) => {
  return useQuery<Comment, Error, Comment, string[]>({
    queryKey: ['comments', userId, mediaId],
    queryFn: () => fetchComments({ userId, mediaId }),
    enabled: !!userId && !!mediaId,
    staleTime: 1000 * 60 * 5,
    throwOnError: true
  })
}

export default useFetchComment
