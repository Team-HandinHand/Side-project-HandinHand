import { Comment } from '@/types/commentDetail'
import { supabase } from '../../../supabaseConfig'

export const fetchComments = async ({
  types,
  userId,
  mediaId
}: {
  types: 'movie' | 'tv'
  userId: string
  mediaId: string
}): Promise<Comment> => {
  const { data, error } = await supabase
    .from(types === 'movie' ? 'comments' : 'drama_comments')
    .select('*')
    .eq('user_id', userId)
    .eq(types === 'movie' ? 'movie_id' : 'drama_id', mediaId)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return data as unknown as Comment
}
