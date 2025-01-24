import { UpdateComment } from '@/service/comments/putDetailsComment'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

type TEditComment = {
  comment_id: string
  newComment: string
  rating?: number
}

export const useCommentEdit = ({
  comment_id,
  newComment,
  rating
}: TEditComment) => {
  const queryClient = useQueryClient()
  const updatedAt = new Date().toISOString()
  const { mutate: updateCommentMutation } = useMutation({
    mutationFn: () => UpdateComment(comment_id, newComment, updatedAt, rating),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['userComment']
      })
      toast.success('수정이 완료되었습니다!')
    },
    onError: () => {
      toast.error('수정에 실패하였습니다!')
    }
  })

  return { updateCommentMutation }
}
