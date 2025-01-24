import { supabase } from '../../../supabaseConfig'

export async function postComment(
  movie_id: string | undefined,
  user_id: string | undefined,
  comment: string,
  rating: number
) {
  if (!movie_id || !user_id) {
    throw new Error('movie_id와 user_id는 필수 값입니다.')
  }

  if (rating > 0) {
    const { data: existingComment, error: checkError } = await supabase
      .from('comments')
      .select('*')
      .eq('user_id', user_id)
      .eq('movie_id', movie_id)

    if (checkError) {
      console.error('댓글 중복 체크 에러:', checkError)
      throw new Error('댓글 중복 체크 중 오류가 발생했습니다.')
    }

    if (existingComment && existingComment.length > 0) {
      throw new Error(
        '이미 이 영화에 관해 평점을 주신적이었어요! 댓글을 통해 수정해주세요'
      )
    }
  }

  const { data, error } = await supabase
    .from('comments')
    .insert([{ movie_id, user_id, comment, rating }])

  if (error) {
    console.error('댓글 추가 에러:', error)
    throw new Error('댓글을 추가하는 중 오류가 발생했습니다.')
  }

  return data
}
