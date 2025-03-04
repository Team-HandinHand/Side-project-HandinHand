import { useInfiniteQuery } from '@tanstack/react-query'
import fetchMedias from '@/service/media/fetchMedias'
import {
  FetchMediasParamsForQuery,
  FetchMediasQKType,
  MediaResponse,
  InfiniteData,
  MediaType,
  MediaCategory
} from '@/types/media'

export const useFetchInfiniteMedias = <T extends MediaType>({
  type,
  category
}: FetchMediasParamsForQuery<T>) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = useInfiniteQuery<
    MediaResponse,
    Error,
    InfiniteData<MediaResponse>,
    FetchMediasQKType<T>,
    number
  >({
    queryKey: ['Medias', type, category],
    queryFn: ({ pageParam }) =>
      fetchMedias({
        type,
        category: category as MediaCategory<typeof type>,
        page: pageParam as number
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: MediaResponse) => {
      return lastPage.page >= lastPage.total_pages
        ? undefined
        : lastPage.page + 1
    },
    enabled: !!category,
    staleTime: 1000 * 60 * 5
  })

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  }
}

export default useFetchInfiniteMedias
