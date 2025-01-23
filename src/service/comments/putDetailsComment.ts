import { supabase } from '../../../supabaseConfig'

export async function UpdateComment(comment_id: string, newComment: string) {
  const { data, error } = await supabase
    .from('comments')
    .update({ comment: newComment })
    .eq('comment_id', comment_id)
    .select()

  if (error) {
    console.error('댓글 수정 에러:', error)
    throw new Error('댓글을 수정하는 중 오류가 발생했습니다.')
  }

  return data
}
