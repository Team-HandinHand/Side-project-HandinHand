import { movieApi } from '@/lib/axios'
import { FetchMediasParams, MediaResponse } from '@/types/media'

const fetchMedias = async ({
  type,
  category,
  page = 1
}: FetchMediasParams): Promise<MediaResponse> => {
  const params = new URLSearchParams({
    language: 'ko',
    page: String(page)
  })

  // movie일 때만 region 파라미터 추가
  if (type === 'movie') {
    params.append('region', 'KR')
  }

  const response = await movieApi.get(`/${type}/${category}?${params}`)
  return response.data
}

export default fetchMedias
