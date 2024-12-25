import { useQuery } from '@tanstack/react-query'
import { supabase } from '../../../supabaseConfig'
import { useUserStore } from '@/stores/userStore'

export const useCheckDuplicate = (field: string, value: string) => {
  const { user } = useUserStore()

  const { refetch } = useQuery({
    queryKey: ['checkDuplicate', field, value],
    queryFn: async () => {
      try {
        if (field === 'nickname' && user?.nickname === value) return false

        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq(field, value)

        if (error) throw error

        return (data ?? []).length > 0
      } catch (error) {
        throw error
      }
    },
    enabled: false, // 자동 실행 방지 (refetch로만 실행)
    staleTime: Infinity, // 데이터를 항상 fresh하게 유지 (자동 리페치 방지)
    retry: false, // 자동 재시도 막음
    throwOnError: true // 에러를 ErrorBoundary로 전파
  })

  return {
    checkDuplicate: () => refetch()
  }
}
