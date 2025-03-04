import { supabase } from '../../../supabaseConfig'

export async function deleteComment(comment_id: string, types: 'movie' | 'tv') {
  const { error } = await supabase
    .from(types === 'movie' ? 'comments' : 'drama_comments')
    .delete()
    .eq('comment_id', comment_id)

  if (error) {
    console.error('댓글 삭제 에러:', error)
    throw new Error('댓글을 삭제하는 중 오류가 발생했습니다.')
  }
}
