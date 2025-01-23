import { supabase } from '../../../supabaseConfig'
import { comment } from '@/types/commentDetail'

export const fetchComments = async ({
  userId,
  mediaId
}: {
  userId: string
  mediaId: string
}): Promise<comment> => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('user_id', userId)
    .eq('movie_id', mediaId)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return data as unknown as comment
}
