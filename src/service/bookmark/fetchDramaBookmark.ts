import { supabase } from '../../../supabaseConfig'
import { DramaBookmark } from '@/types/bookmark'
import { MediaResult } from '@/types/media'

export async function fetchDramaBookmarks(userId: string) {
  const { data, error } = await supabase
    .from('dramabookmark')
    .select(
      `
          drama_id,
            dramaResults (
            id,
            poster_path,
            name,
            first_air_date
          )
        `
    )
    .eq('user_id', userId)

  if (error) {
    throw new Error(error.message)
  }

  return (data as unknown as DramaBookmark[]).map(item => ({
    id: String(item.dramaResults?.id || ''),
    poster_path: item.dramaResults?.poster_path || '',
    title: item.dramaResults?.name || '',
    release_date: item.dramaResults?.first_air_date || '',
    media_type: 'tv'
  })) as unknown as MediaResult[]
}
