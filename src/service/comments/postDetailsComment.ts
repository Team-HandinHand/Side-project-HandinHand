import { supabase } from '../../../supabaseConfig'

export async function postComment(
  type: string | undefined,
  media_id: string | undefined,
  user_id: string | undefined,
  comment: string,
  rating: number
) {
  if (!type || !media_id || !user_id) {
    throw new Error('해당 콘텐츠를 찾을 수 없습니다')
  }

  if (rating > 0) {
    const { data: existingComment, error: checkError } = await supabase
      .from(type === 'movie' ? 'comments' : 'drama_comments')
      .select('*')
      .eq('user_id', user_id)
      .eq('movie_id', media_id)

    if (checkError) {
      console.error('댓글 중복 체크 에러:', checkError)
      throw new Error('댓글 중복 체크 중 오류가 발생했습니다.')
    }

    if (existingComment && existingComment.length > 0) {
      throw new Error(
        '이미 이 영화를 평가를 하신 적이 있었어요! 댓글을 통해 수정해주세요'
      )
    }
  }

  const insertData =
    type === 'movie'
      ? {
          movie_id: media_id,
          user_id: user_id,
          comment: comment,
          rating: rating
        }
      : {
          drama_id: media_id,
          user_id: user_id,
          comment: comment,
          rating: rating
        }

  const { data, error } = await supabase
    .from(type === 'movie' ? 'comments' : 'drama_comments')
    .insert([insertData])

  if (error) {
    console.error('댓글 추가 에러:', error)
    throw new Error('댓글을 추가하는 중 오류가 발생했습니다.')
  }

  return data
}
