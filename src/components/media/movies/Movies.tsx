import * as S from '../Media.styles'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { MediaFilter, MediaList } from '@/components'
import useFetchInfiniteMedias from '@/hooks/queries/useFetchInfiniteMedias'
import { useQueryState } from 'nuqs'
import { MediaResult, MovieCategory } from '@/types/media'

export const Movies = () => {
  const { ref, inView } = useInView()
  const [category, setCategory] = useQueryState('category', {
    defaultValue: 'popular'
  })

  const { data, error, fetchNextPage, hasNextPage, isFetching } =
    useFetchInfiniteMedias<'movie'>({
      type: 'movie',
      category: category as unknown as MovieCategory
    })

  useEffect(() => {
    if (!category) {
      setCategory('popular')
    } else if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [category, inView, hasNextPage, setCategory, fetchNextPage])

  if (error) throw new Error(error.message) // 에러 바운더리로 던짐

  console.log(data)

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
