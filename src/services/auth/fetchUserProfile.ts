import { supabase } from '../../../supabaseConfig'

const fetchUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('email, nickname, profile_picture_path')
    .eq('user_id', userId)
    .single()

  if (error) throw error
  return data
}

export default fetchUserProfile
