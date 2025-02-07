import { MediaType } from '@/types/media'
import { supabase } from '../../../supabaseConfig'

export interface ICommentItemProps {
  comment_id: string
  user_id: string
  comment: string
  created_at: string
  updated_at?: string
  movie_id: string
  rating: number
}

export async function getComments(movie_id: number, typedType: MediaType) {
  let { data: comments, error } = await supabase
    .from(typedType === 'movie' ? 'comments' : 'drama_comments')
    .select('*')
    .eq(typedType === 'movie' ? 'movie_id' : 'drama_id', String(movie_id))
    .order('created_at', { ascending: false })

  if (error) {
    console.error('댓글을 가져오는 중 오류 발생:', error)
    return []
  }

  return comments as unknown as ICommentItemProps[]
}
