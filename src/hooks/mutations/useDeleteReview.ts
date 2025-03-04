import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteReview } from '@/service/review/deleteReview'
import toast from 'react-hot-toast'

export function useDeleteReview() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      toast.success('평가가 삭제되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['reviews'] })
    },
    onError: () => {
      toast.error('삭제 실패했습니다.')
    }
  })
}
