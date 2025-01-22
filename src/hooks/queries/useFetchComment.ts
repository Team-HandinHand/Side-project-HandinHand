import { fetchComments } from '@/service/comments/fetchComment'
import { useQuery } from '@tanstack/react-query'

const useFetchComment = ({
  userId,
  mediaId
}: {
  userId: string
  mediaId: string
}) => {
  return useQuery({
    queryKey: ['comments'],
    queryFn: () => fetchComments({ userId, mediaId }),
    enabled: !!userId && !!mediaId,
    staleTime: 1000 * 60 * 5
  })
}

export default useFetchComment
