import { fetchComments } from '@/service/comments/fetchComment'
import { comment } from '@/types/commentDetail'
import { useQuery } from '@tanstack/react-query'

const useFetchComment = ({
  userId,
  mediaId
}: {
  userId: string
  mediaId: string
}) => {
  return useQuery<comment, Error, comment, string[]>({
    queryKey: ['comments', userId, mediaId],
    queryFn: () => fetchComments({ userId, mediaId }),
    enabled: !!userId && !!mediaId,
    staleTime: 1000 * 60 * 5,
    throwOnError: true
  })
}

export default useFetchComment
