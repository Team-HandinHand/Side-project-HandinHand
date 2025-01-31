import { supabase } from '../../../supabaseConfig'

export async function UpdateComment(
  types: 'movie' | 'tv',
  comment_id: string,
  newComment: string,
  updatedAt: string,
  rating?: number
) {
  const { data, error } = await supabase
    .from(types === 'movie' ? 'comments' : 'drama_comments')
    .update({ comment: newComment, updated_at: updatedAt, rating: rating })
    .eq('comment_id', comment_id)
    .select()

  if (error) {
    console.error('댓글 수정 에러:', error)
    throw new Error('댓글을 수정하는 중 오류가 발생했습니다.')
  }

  return data
}
