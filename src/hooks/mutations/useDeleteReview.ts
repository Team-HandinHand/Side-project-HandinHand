import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteReview } from '@/service/review/deleteReview'

export function useDeleteReview() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteReview, 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] })
    },
    onError: (error) => {
      console.error('리뷰 삭제 중 오류 발생:', error)
    },
  })
}
