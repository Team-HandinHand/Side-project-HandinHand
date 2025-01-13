import { supabase } from '../../supabaseConfig'
import useAuthStateChange from './useAuthStateChange'

export const useCheckDuplicate = () => {
  const { user } = useAuthStateChange()

  const checkDuplicate = async (field: string, value: string) => {
    try {
      if (field === 'nickname' && user?.nickname === value)
        return { data: false }

      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq(field, value)
      console.log('data', data)

      if (error) throw error

      return { data: data?.length > 0 }
    } catch (error) {
      throw error
    }
  }

  return { checkDuplicate }
}
