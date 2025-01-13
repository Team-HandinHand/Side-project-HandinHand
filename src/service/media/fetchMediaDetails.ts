import { movieApi } from '@/lib/axios'
import { FetchMediaMoreInfoParams, MediaDetails } from '@/types/media'

const fetchMediaDetails = async ({
  type,
  mediaId
}: FetchMediaMoreInfoParams): Promise<MediaDetails> => {
  const response = await movieApi.get(`/${type}/${mediaId}`, {
    params: {
      language: 'ko'
    }
  })
  return response.data
}

export default fetchMediaDetails
