import { UpdateComment } from '@/service/comments/putDetailsComment'
import { toastError, toastSuccess } from '@/utils/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type TEditComment = {
  comment_id: string
  newComment: string
}

export const useCommentEdit = ({ comment_id, newComment }: TEditComment) => {
  const queryClient = useQueryClient()
  const updatedAt = new Date().toISOString()

  const { mutate: updateCommentMutation } = useMutation({
    mutationFn: () => UpdateComment(comment_id, newComment, updatedAt),
    onSuccess: () => {
      toastSuccess('댓글이 수정되었습니다.')
      queryClient.invalidateQueries({
        queryKey: ['userComment']
      })
    },
    onError: (error: Error) => {
      console.error('수정 실패:', error)
      toastError('댓글 수정 중 오류가 발생했습니다.')
    }
  })

  return { updateCommentMutation }
}
