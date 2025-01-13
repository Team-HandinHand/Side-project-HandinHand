import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../../supabaseConfig'
import { useErrorHandler } from '@/hooks/useErrorHandler'
import { PostgrestError } from '@supabase/supabase-js'

export const useDeactivateAccount = () => {
  const handleError = useErrorHandler()
  const navigate = useNavigate()

  const { mutateAsync: deactivateAccount, isPending } = useMutation<
    void,
    PostgrestError
  >({
    mutationFn: async () => {
      // Supabase 사용자 삭제
      const { error } = await supabase.rpc('delete_user')

      if (error) {
        throw error as PostgrestError
      }

      // 성공 시 로그인 페이지로 이동
      navigate('/signin', { replace: true })
    },
    onError: error => handleError('계정 해지', error)
  })

  return { deactivateAccount, isPending }
}
