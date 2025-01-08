import { MediaResponse, MediaType } from '@/types/media'
import { useQuery } from '@tanstack/react-query'
import { MediaDetails, MediaCredits } from '@/types/media'
import fetchMediaDetails from '@/service/media/fetchMediaDetails'
import fetchMediaCredits from '@/service/media/fetchMediaCredits'
import fetchRecommendMedia from '@/service/media/fetchRecommendMedia'

const useFetchMovieMoreInfo = (type: MediaType, mediaId: number) => {
  const details = useQuery<MediaDetails>({
    queryKey: ['mediaDetails', type, mediaId],
    queryFn: () => fetchMediaDetails({ type, mediaId }),
    enabled: !!mediaId,
    staleTime: 1000 * 60 * 5,
    throwOnError: true // 에러 바운더리로 에러 던지기
  })

  const credits = useQuery<MediaCredits>({
    queryKey: ['mediaCredits', type, mediaId],
    queryFn: () => fetchMediaCredits({ type, mediaId }),
    enabled: !!mediaId,
    staleTime: 1000 * 60 * 5,
    throwOnError: true
  })

  const recommendations = useQuery<MediaResponse>({
    queryKey: ['recommendMedias', type, mediaId],
    queryFn: () => fetchRecommendMedia({ type, mediaId }),
    enabled: !!mediaId,
    staleTime: 1000 * 60 * 5,
    throwOnError: true
  })

  return { details, credits, recommendations }
}

export default useFetchMovieMoreInfo
