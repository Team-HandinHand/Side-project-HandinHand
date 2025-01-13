import { movieApi } from '@/lib/axios'
import { FetchMediaMoreInfoParams, MediaResponse } from '@/types/media'

const fetchRecommendMedia = async ({
  type,
  mediaId
}: FetchMediaMoreInfoParams): Promise<MediaResponse> => {
  const response = await movieApi.get(`/${type}/${mediaId}/recommendations`, {
    params: {
      language: 'ko'
    }
  })
  return response.data
}

export default fetchRecommendMedia
