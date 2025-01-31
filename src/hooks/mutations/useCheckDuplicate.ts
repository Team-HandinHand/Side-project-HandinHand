import { supabase } from '../../../supabaseConfig'
import { useMutation } from '@tanstack/react-query'
import { useErrorHandler } from '@/hooks/useErrorHandler'
import useUserStore from '@/stores/useUserStore'
import { CheckDuplicateProps } from '@/types/auth'

export const useCheckDuplicate = () => {
  const { user } = useUserStore()
  const handleError = useErrorHandler()

  const { mutateAsync: checkDuplicate, isPending } = useMutation<
    boolean,
    Error,
    CheckDuplicateProps
  >({
    mutationFn: async ({ field, value }) => {
      // 현재 사용자의 닉네임과 같으면 early return
      if (field === 'nickname' && user?.nickname === value) return false

      const { data, error } = await supabase
        .from('users')
        .select(field)
        .eq(field, value)

      if (error) throw error

      return data.length > 0
    },
    onError: error => handleError('중복 확인', error)
  })

  return { checkDuplicate, isPending }
}
