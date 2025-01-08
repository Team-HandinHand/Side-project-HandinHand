import { useInfiniteQuery } from '@tanstack/react-query'
import fetchSearchMedias from '@/service/media/fetchSearchMedias'
import { MediaSerchResults, MediaType } from '@/types/media'

const useFetchInfiniteSearchMedia = (type: MediaType, searchValue: string) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = useInfiniteQuery<MediaSerchResults>({
    queryKey: ['MediaSearchResult', type, searchValue], // 쿼리 키가 변경될 때 자동으로 리패치가 발생
    queryFn: ({ pageParam = 1 }) =>
      fetchSearchMedias({
        type,
        searchValue,
        page: pageParam as number
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: MediaSerchResults) => {
      return lastPage.page >= lastPage.total_pages
        ? undefined
        : lastPage.page + 1
    },
    enabled: !!type && !!searchValue
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

export default useFetchInfiniteSearchMedia
