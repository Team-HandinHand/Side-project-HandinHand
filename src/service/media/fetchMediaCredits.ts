import { movieApi } from '@/lib/axios'
import { FetchMediaMoreInfoParams, MediaCredits } from '@/types/media'

const fetchMediaCredits = async ({
  type,
  mediaId
}: FetchMediaMoreInfoParams): Promise<MediaCredits> => {
  const response = await movieApi.get(`/${type}/${mediaId}/credits`, {
    params: {
      language: 'ko'
    }
  })
  return response.data
}

export default fetchMediaCredits
