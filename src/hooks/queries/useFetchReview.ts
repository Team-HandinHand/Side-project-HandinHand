import { useQuery } from '@tanstack/react-query'
import { ReviewWithMedia } from '@/types/review'
import { fetchMovieReviews } from '@/service/review/fetchMovieReview'
import { fetchDramaReviews } from '@/service/review/fetchDramaReview'
import { MediaType } from '@/types/media'

function useFetchReview(userId: string | undefined, activeTab: MediaType) {
  return useQuery<ReviewWithMedia[]>({
    queryKey: ['reviews', activeTab, userId || ''],
    queryFn: async () => {
      if (!userId) return []
      if (activeTab === 'movie') {
        return fetchMovieReviews(userId)
      } else {
        return fetchDramaReviews(userId)
      }
    },
    enabled: !!userId
  })
}

export default useFetchReview
