import { supabase } from '../../../supabaseConfig'

export type UserProfile = {
  email: string
  nickname: string
  profile_picture_path: string
}

const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
  const { data, error } = await supabase
    .from('users')
    .select('email, nickname, profile_picture_path')
    .eq('user_id', userId)
    .single()

  if (error) throw error
  return data as unknown as UserProfile
}

export default fetchUserProfile
