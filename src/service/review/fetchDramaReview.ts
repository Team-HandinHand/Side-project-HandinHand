import { DramaReview, ReviewWithMedia } from '@/types/review'
import { supabase } from '../../../supabaseConfig'

export const fetchDramaReviews = async (
  userId: string
): Promise<ReviewWithMedia[]> => {
  const { data, error } = await supabase
    .from('drama_comments')
    .select(
      `
        comment_id,
        media_id: drama_id,
        comment,
        rating,
        created_at,
        dramaResults (
          poster_path,
          name
        )
      `
    )
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  return (data as unknown as DramaReview[]).map(item => ({
    comment_id: item.comment_id,
    media_id: item.drama_id,
    comment: item.comment,
    rating: item.rating,
    created_at: item.created_at,
    mediaResults: item.dramaResults || { poster_path: null },
    title: item.dramaResults?.name || '제목 없음'
  }))
}
