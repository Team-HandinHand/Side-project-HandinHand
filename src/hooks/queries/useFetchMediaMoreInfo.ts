import { MediaResponse, MediaType } from '@/types/media'
import { useSuspenseQueries, UseQueryResult } from '@tanstack/react-query'
import { MediaDetails, MediaCredits } from '@/types/media'
import fetchMediaDetails from '@/service/media/fetchMediaDetails'
import fetchMediaCredits from '@/service/media/fetchMediaCredits'
import fetchRecommendMedia from '@/service/media/fetchRecommendMedia'

const useFetchMovieMoreInfo = (type: MediaType, mediaId: number) => {
  const [details, credits, recommendations] = useSuspenseQueries({
    queries: [
      {
        queryKey: ['mediaDetails', type, mediaId] as const,
        queryFn: () => fetchMediaDetails({ type, mediaId }),
        staleTime: 1000 * 60 * 5
      } as const,
      {
        queryKey: ['mediaCredits', type, mediaId] as const,
        queryFn: () => fetchMediaCredits({ type, mediaId }),
        staleTime: 1000 * 60 * 5
      } as const,
      {
        queryKey: ['recommendMedias', type, mediaId] as const,
        queryFn: () => fetchRecommendMedia({ type, mediaId }),
        staleTime: 1000 * 60 * 5
      } as const
    ]
  })

  return {
    details: details as UseQueryResult<MediaDetails>,
    credits: credits as UseQueryResult<MediaCredits>,
    recommendations: recommendations as UseQueryResult<MediaResponse>
  }
}

export default useFetchMovieMoreInfo
