import {
  getComments,
  ICommentItemProps
} from '@/service/comments/fetchDetailsComments'
import { MediaType } from '@/types/media'
import { useQuery } from '@tanstack/react-query'

export default function useFetchUserComment(
  typedId: number,
  typedType: MediaType
) {
  const { data: commentsData } = useQuery<ICommentItemProps[] | undefined>({
    queryKey: ['userComment', typedId],
    queryFn: () => getComments(typedId, typedType),
    staleTime: 1000 * 60 * 5
  })

  return commentsData
}
