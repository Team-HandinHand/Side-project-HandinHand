import { useQuery } from '@tanstack/react-query'
import { MediaResult, MediaType } from '@/types/media'
import { fetchMovieBookmarks } from '@/service/bookmark/fetchMovieBookmark'
import { fetchDramaBookmarks } from '@/service/bookmark/fetchDramaBookmark'

function useFetchBookmark(userId: string | undefined, activeTab: MediaType) {
  return useQuery<MediaResult[]>({
    queryKey: ['bookmark', activeTab, userId],
    queryFn: () => {
      if (!userId) return []
      if (activeTab === 'movie') {
        return fetchMovieBookmarks(userId)
      } else {
        return fetchDramaBookmarks(userId)
      }
    },
    enabled: !!userId
  })
}

export default useFetchBookmark
