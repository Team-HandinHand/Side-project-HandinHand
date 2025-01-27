import * as S from '../Media.styles'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useQueryState } from 'nuqs'
import { MediaFilter, MediaList, ScrollToTop } from '@/components'
import useFetchInfiniteMedias from '@/hooks/queries/useFetchInfiniteMedias'
import { MediaResult, TVCategory } from '@/types/media'
import { TV_CATEGORIES } from '@/constants/media'
export const Series = () => {
  const { ref, inView } = useInView()
  const [category, setCategory] = useQueryState('category')

  const { data, error, fetchNextPage, hasNextPage, isFetching } =
    useFetchInfiniteMedias<'tv'>({
      type: 'tv',
      category: category as unknown as TVCategory
    })

  useEffect(() => {
    if (!TV_CATEGORIES.includes(category as TVCategory)) {
      setCategory('popular')
    } else if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [category, inView, hasNextPage, setCategory, fetchNextPage])

  if (error) throw new Error(error.message) // 에러 바운더리로 던짐

  return (
    <S.MediaContainer>
      <MediaFilter type="tv" />
      <MediaList
        medias={data?.pages.flatMap((page): MediaResult[] => page.results)}
        isLoading={isFetching}
      />
      <div
        ref={ref}
        style={{ height: '2px' }}
      />
      <ScrollToTop />
    </S.MediaContainer>
  )
}
