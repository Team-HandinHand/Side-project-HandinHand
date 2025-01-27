import {
  getComments,
  ICommentItemProps
} from '@/service/comments/fetchDetailsComments'
import { useQuery } from '@tanstack/react-query'

export default function useFetchUserComment(typedId: number) {
  const { data: commentsData } = useQuery<ICommentItemProps[] | undefined>({
    queryKey: ['userComment', typedId],
    queryFn: () => getComments(typedId),
    staleTime: 1000 * 60 * 5
  })

  return commentsData
}
