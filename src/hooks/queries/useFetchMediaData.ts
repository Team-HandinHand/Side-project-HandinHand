import fetchMediaDetails from '@/service/media/fetchMediaDetails'
import { FetchMediaMoreInfoParams } from '@/types/media'
import { useQuery } from '@tanstack/react-query'

export const useFetchMediaData = ({
  type,
  mediaId
}: FetchMediaMoreInfoParams) => {
  return useQuery({
    queryKey: ['mediaData', type, mediaId],
    queryFn: () => fetchMediaDetails({ type, mediaId }),
    enabled: !!mediaId,
    staleTime: 1000 * 60 * 5,
    throwOnError: true
  })
}
