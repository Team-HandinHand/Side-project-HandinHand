import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteReview } from '@/service/review/deleteReview'
import toast from 'react-hot-toast'

const toastSuccess = (message: string) => {
  toast.success(message, {
    duration: 1500,
    style: {
      fontSize: 'var(--font-small)'
    }
  })
}
const toastError = (message: string) => {
  toast.error(message, {
    duration: 1500,
    style: {
      fontSize: 'var(--font-small)'
    }
  })
}
export function useDeleteReview() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      toastSuccess('평가가 삭제되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['reviews'] })
    },
    onError: () => {
      toastError('삭제 실패했습니다.')
    }
  })
}
