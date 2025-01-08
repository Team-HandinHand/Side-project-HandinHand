import { useInfiniteQuery } from '@tanstack/react-query'
import fetchMedias from '@/service/media/fetchMedias'
import {
  MediaResponse,
  MediaType,
  MediaCategory,
  MovieCategory,
  TVCategory
} from '@/types/media'

export const useFetchInfiniteMedias = <T extends MediaType>({
  type,
  category
}: {
  type: T
  category: T extends 'movie' ? MovieCategory : TVCategory
}) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = useInfiniteQuery<MediaResponse>({
    queryKey: ['movies', type, category],
    queryFn: ({ pageParam }) =>
      fetchMedias({
        type,
        category: category as unknown as MediaCategory<typeof type>,
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
