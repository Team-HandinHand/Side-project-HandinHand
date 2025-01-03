import { useMutation } from '@tanstack/react-query'
import { supabase } from '../../../supabaseConfig'
import { useErrorHandler } from '@/hooks/useErrorHandler'

export const useSignOut = () => {
  const handleError = useErrorHandler()

  const { mutateAsync: signOut, isPending } = useMutation({
    mutationFn: async () => {
      // Supabase 로그아웃
      const { error } = await supabase.auth.signOut()

      if (error) throw error
    },
    onError: error => handleError('로그아웃', error)
  })

  return { signOut, isPending }
}
