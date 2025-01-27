import { supabase } from '../../../supabaseConfig'

interface DeleteReviewParams {
  commentId: string
  type: 'movie' | 'tv'
}

export async function deleteReview({ commentId, type }: DeleteReviewParams) {
  const tableName = type === 'movie' ? 'comments' : 'drama_comments'

  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq('comment_id', commentId)

  if (error) {
    throw new Error(error.message)
  }
  return { success: true }
}
