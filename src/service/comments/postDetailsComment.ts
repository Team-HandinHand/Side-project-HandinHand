import { supabase } from '../../../supabaseConfig'

export async function postComment(
  movie_id: string | undefined,
  user_id: string | undefined,
  comment: string
) {
  if (!movie_id || !user_id) {
    throw new Error('movie_id와 user_id는 필수 값입니다.')
  }

  const { data, error } = await supabase
    .from('comments')
    .insert([{ movie_id, user_id, comment }])

  if (error) {
    console.error('댓글 추가 에러:', error)
    throw new Error('댓글을 추가하는 중 오류가 발생했습니다.')
  }

  return data
}
