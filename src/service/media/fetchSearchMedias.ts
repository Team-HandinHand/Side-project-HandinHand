import { movieApi } from '@/lib/axios'
import { FetchSearchMediaParams, MediaSerchResults } from '@/types/media'

const fetchSearchMedias = async ({
  type,
  searchValue,
  page = 1
}: FetchSearchMediaParams): Promise<MediaSerchResults> => {
  const url = `/search/${type}?query=${encodeURIComponent(searchValue)}&include_adult=false&language=ko&page=${page}&region=KR`
  const response = await movieApi.get(url)
  return response.data
}

export default fetchSearchMedias
