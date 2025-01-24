import { TvResult } from '@/types/media'
import { supabase } from '../../../supabaseConfig'
import { movieApi } from '@/lib/axios'
interface DramaBookmark {
  drama_id: string
}

export const fetchDramaBookmarks = async (
  userId: string
): Promise<TvResult[]> => {
  const { data, error } = await supabase
    .from('dramabookmark')
    .select('drama_id')
    .eq('user_id', userId)

  console.log(data)
  if (error) {
    throw new Error(error.message)
  }

  const bookmarks = data as unknown as DramaBookmark[]

  const dramaDetails = await Promise.all(
    bookmarks.map(async item => {
      const dramaData = await fetchDramaDataFromTMDB(item.drama_id)
      return {
        id: dramaData.id,
        poster_path: dramaData.poster_path,
        title: dramaData.name,
        release_date: dramaData.first_air_date,
        media_type: 'tv'
      }
    })
  )
  return dramaDetails
}

async function fetchDramaDataFromTMDB(dramaId: string) {
  const response = await movieApi.get(`/tv/${dramaId}`, {
    params: { language: 'ko' }
  })
  return response.data
}
