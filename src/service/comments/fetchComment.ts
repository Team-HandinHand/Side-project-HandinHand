import { supabase } from '../../../supabaseConfig'

export const fetchComments = async ({
  userId,
  mediaId
}: {
  userId: string
  mediaId: string
}) => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('user_id', userId)
    .eq('movie_id', mediaId)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return data
}
