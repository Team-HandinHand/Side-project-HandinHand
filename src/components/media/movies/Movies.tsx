import * as S from '../Media.styles'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useQueryState } from 'nuqs'
import { MediaFilter, MediaList } from '@/components'
import useFetchInfiniteMedias from '@/hooks/queries/useFetchInfiniteMedias'
import { MediaResult, MovieCategory } from '@/types/media'
import { MOVIE_CATEGORIES } from '@/constants/media'

export const Movies = () => {
  const { ref, inView } = useInView()
  const [category, setCategory] = useQueryState('category')

  const { data, error, fetchNextPage, hasNextPage, isFetching } =
    useFetchInfiniteMedias<'movie'>({
      type: 'movie',
      category: category as unknown as MovieCategory
    })

  useEffect(() => {
    if (!MOVIE_CATEGORIES.includes(category as MovieCategory)) {
      setCategory('popular')
    } else if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [category, inView, hasNextPage, setCategory, fetchNextPage])

  if (error) throw new Error(error.message) // 에러 바운더리로 던짐

  return (
    <S.MediaContainer>
      <MediaFilter type="movie" />
      <MediaList
        medias={data?.pages.flatMap((page): MediaResult[] => page.results)}
        isLoading={isFetching}
      />
      <div
        ref={ref}
        style={{ height: '2px' }}
      />
    </S.MediaContainer>
  )
}
