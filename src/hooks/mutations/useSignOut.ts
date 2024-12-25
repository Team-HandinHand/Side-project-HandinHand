import { useMutation } from '@tanstack/react-query'
import { supabase } from '../../../supabaseConfig'
import { useUserStore } from '@/stores/userStore'
import { useErrorHandler } from '@/hooks/useErrorHandler'

export const useSignOut = () => {
  const { clearUser } = useUserStore()
  const handleError = useErrorHandler()

  const { mutateAsync: signOut, isPending } = useMutation({
    mutationFn: async () => {
      // Supabase 로그아웃
      const { error } = await supabase.auth.signOut()

      if (error) {
        throw error
      }

      // 전역 상태에서 사용자 정보 제거
      clearUser()
    },
    onError: error => handleError('로그아웃', error)
  })

  return { signOut, isPending }
}
