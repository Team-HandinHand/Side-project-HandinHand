import { useSuspenseQuery } from '@tanstack/react-query'
import fetchMedias from '@/service/media/fetchMedias'
import {
  FetchMediasForNoAuthHomeQKType,
  MediaResponse,
  MediaType
} from '@/types/media'

const useFetchPopularMedia = (type: MediaType) => {
  const { data, isFetching, error } = useSuspenseQuery<
    MediaResponse,
    Error,
    MediaResponse,
    FetchMediasForNoAuthHomeQKType
  >({
    queryKey: ['MediasForNoAuthHome', type],
    queryFn: () => fetchMedias({ type, category: 'popular' }),
    staleTime: 1000 * 60 * 5
  })

  if (error) {
    throw error
  }

  const filteredData = data?.results.slice(10) // 10개 추출
  return { filteredData, isFetching }
}

export default useFetchPopularMedia
