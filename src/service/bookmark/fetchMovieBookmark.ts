import { supabase } from '../../../supabaseConfig'
import { MovieBookmark } from '@/types/bookmark'
import { MediaResult } from '@/types/media'

export async function fetchMovieBookmarks(userId: string) {
  const { data, error } = await supabase
    .from('moviebookmark')
    .select(
      `
        movie_id,
        movieResults (
          id,
          poster_path,
          title,
          release_date
        )
      `
    )
    .eq('user_id', userId)

  if (error) {
    throw new Error(error.message)
  }

  return (data as unknown as MovieBookmark[]).map(item => ({
    id: String(item.movieResults?.id || ''),
    poster_path: item.movieResults?.poster_path || '',
    title: item.movieResults?.title || '',
    release_date: item.movieResults?.release_date || '',
    media_type: 'movie'
  })) as unknown as MediaResult[]
}
