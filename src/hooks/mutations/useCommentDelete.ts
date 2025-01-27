import { deleteComment } from '@/service/comments/deleteDetailsComment'
import { toastError, toastSuccess } from '@/utils/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { To, useMatch, useNavigate } from 'react-router-dom'

export const useCommentDelete = (comment_id: string) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const isTargetPage = useMatch('/comments/detail/:type/:mediaId/:userId')

  const { mutate: deleteCommentMutation } = useMutation({
    mutationFn: () => deleteComment(comment_id),
    onSuccess: () => {
      toastSuccess('해당 댓글이 삭제되었습니다.')
      queryClient.invalidateQueries({
        queryKey: ['userComment']
      })
      if (isTargetPage) {
        navigate(-1 as To, { state: { showToast: true } })
      }
    },
    onError: (error: Error) => {
      console.error('삭제 실패:', error)
      toastError('댓글 삭제 중 오류가 발생했습니다.')
    }
  })
  return { deleteCommentMutation }
}
