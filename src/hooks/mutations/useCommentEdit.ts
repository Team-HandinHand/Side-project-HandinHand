import { UpdateComment } from '@/service/comments/putDetailsComment'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

type TEditComment = {
  types: 'movie' | 'tv'
  comment_id: string
  newComment: string
  rating?: number
}

export const useCommentEdit = ({
  types,
  comment_id,
  newComment,
  rating
}: TEditComment) => {
  const queryClient = useQueryClient()
  const updatedAt = new Date().toISOString()

  const { mutate: updateCommentMutation } = useMutation({
    mutationFn: () =>
      UpdateComment(types, comment_id, newComment, updatedAt, rating),
    onSuccess: () => {
      toast.success('평가가 수정되었습니다.')
      queryClient.invalidateQueries({
        queryKey: ['userComment']
      })
    },
    onError: (error: Error) => {
      console.error('수정 실패:', error)
      toast.error('평가 수정 중 오류가 발생했습니다.')
    }
  })

  return { updateCommentMutation }
}
