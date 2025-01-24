import { MovieReview, ReviewWithMedia } from '@/types/review'
import { supabase } from '../../../supabaseConfig'

export const fetchMovieReviews = async (
  userId: string
): Promise<ReviewWithMedia[]> => {
  const { data, error } = await supabase
    .from('comments')
    .select(
      `
      comment_id,
      media_id: movie_id,
      comment,
      rating,
      created_at,
      movieResults (
        poster_path,
        title
      )
    `
    )
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  return (data as unknown as MovieReview[]).map(item => ({
    comment_id: item.comment_id,
    media_id: item.movie_id,
    comment: item.comment,
    rating: item.rating,
    created_at: item.created_at,
    mediaResults: item.movieResults || { poster_path: null },
    title: item.movieResults?.title || '제목 없음'
  }))
}
