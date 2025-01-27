import { MovieResult } from '@/types/media'
import { supabase } from '../../../supabaseConfig'
import { movieApi } from '@/lib/axios'
interface MovieBookmark {
  movie_id: string
}

export const fetchMovieBookmarks = async (
  userId: string
): Promise<MovieResult[]> => {
  const { data, error } = await supabase
    .from('moviebookmark')
    .select('movie_id')
    .eq('user_id', userId)

  if (error) {
    throw new Error(error.message)
  }

  const bookmarks = data as unknown as MovieBookmark[]

  const movieDetails = await Promise.all(
    bookmarks.map(async item => {
      const movieData = await fetchMovieDataFromTMDB(item.movie_id)
      return {
        id: movieData.id,
        poster_path: movieData.poster_path,
        title: movieData.title,
        release_date: movieData.release_date,
        media_type: 'movie'
      }
    })
  )

  return movieDetails
}

async function fetchMovieDataFromTMDB(movieId: string) {
  const response = await movieApi.get(`/movie/${movieId}`, {
    params: { language: 'ko' }
  })
  return response.data
}
