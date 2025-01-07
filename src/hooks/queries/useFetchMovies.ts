import { MediaProps } from '@/types/api'
import { movieApi } from '../../service/movieApi'
import { useQuery } from '@tanstack/react-query'

const useFetchMovies = ({ mediaType, category, page }: MediaProps) => {
  const { data, isLoading, isError, isFetching } = useQuery<MediaProps>({
    queryKey: ['fetchMovies', category, page],
    queryFn: async () => {
      const url = `/${mediaType}/${category}?language=ko&page=${page}&region=KR`
      const response = await movieApi.get(url)
      return response.data
    },
    enabled: !!category && !!page,
    staleTime: 1000 * 60
  })

  return {
    data,
    isLoading,
    isError,
    isFetching
  }
}

export default useFetchMovies
