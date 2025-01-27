import { supabase } from '../../../supabaseConfig'
import { movieApi } from '@/lib/axios'
import { Review, MovieReviewData, DramaReviewData } from '@/types/review'

async function fetchMovieDataFromTMDB(movieId: string) {
  const response = await movieApi.get(`/movie/${movieId}`, {
    params: { language: 'ko' }
  })
  return response.data
}

async function fetchDramaDataFromTMDB(dramaId: string) {
  const response = await movieApi.get(`/tv/${dramaId}`, {
    params: { language: 'ko' }
  })
  return response.data
}

export async function fetchMovieReviews(userId: string): Promise<Review[]> {
  const { data, error } = await supabase
    .from('comments')
    .select('movie_id, comment_id, comment, rating, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  const reviews = data as unknown as MovieReviewData[]

  return Promise.all(
    reviews.map(async item => {
      const movieData = await fetchMovieDataFromTMDB(item.movie_id)
      return {
        id: String(movieData.id),
        poster_path: movieData.poster_path,
        title: movieData.title,
        release_date: movieData.release_date,
        media_type: 'movie',
        comment: item.comment,
        comment_id: item.comment_id,
        rating: item.rating,
        created_at: item.created_at
      }
    })
  )
}

export async function fetchDramaReviews(userId: string): Promise<Review[]> {
  const { data, error } = await supabase
    .from('drama_comments')
    .select('drama_id, comment_id, comment, rating, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  const reviews = data as unknown as DramaReviewData[]

  return Promise.all(
    reviews.map(async item => {
      const dramaData = await fetchDramaDataFromTMDB(item.drama_id)
      return {
        id: String(dramaData.id),
        poster_path: dramaData.poster_path,
        title: dramaData.name,
        release_date: dramaData.first_air_date,
        media_type: 'tv',
        comment: item.comment,
        comment_id: item.comment_id,
        rating: item.rating,
        created_at: item.created_at
      }
    })
  )
}
