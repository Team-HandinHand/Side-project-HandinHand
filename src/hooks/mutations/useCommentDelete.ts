import { deleteComment } from '@/service/comments/deleteDetailsComment'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCommentDelete = (comment_id: string) => {
  const queryClient = useQueryClient()

  const { mutate: deleteCommentMutation } = useMutation({
    mutationFn: () => deleteComment(comment_id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['userComment']
      })
    }
  })
  return { deleteCommentMutation }
}
