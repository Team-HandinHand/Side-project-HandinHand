import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../../supabaseConfig'
import { useUserStore } from '@/stores/userStore'
import { useErrorHandler } from '@/hooks/useErrorHandler'

export const useDeactivateAccount = () => {
  const { clearUser } = useUserStore()
  const handleError = useErrorHandler()
  const navigate = useNavigate()

  const { mutateAsync: deactivateAccount, isPending } = useMutation({
    mutationFn: async () => {
      // Supabase 사용자 삭제
      const { error } = await supabase.rpc('delete_user')

      if (error) throw error

      // 전역 상태에서 사용자 정보 제거
      clearUser()
      // 성공 시 로그인 페이지로 이동
      navigate('/signin', { replace: true })
    },
    onError: error => handleError('계정 해지', error)
  })

  return { deactivateAccount, isPending }
}
