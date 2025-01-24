import {
  getComments,
  ICommentItemProps
} from '@/service/comments/fetchDetailsComments'
import { useQuery } from '@tanstack/react-query'

export default function useFetchUserComment(typedId: number) {
  const { data: commentsData } = useQuery<ICommentItemProps[] | undefined>({
    queryKey: ['userComment'],
    queryFn: () => getComments(typedId)
  })

  return commentsData
}
