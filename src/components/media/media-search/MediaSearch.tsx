import * as S from './MediaSearch.styles'
import { Fragment, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useQueryState } from 'nuqs'
import { Tab, MediaList } from '@/components'
import useFetchInfiniteSearchMedia from '@/hooks/queries/useFetchInfiniteSearchMedia'
import { MediaType, MediaResult } from '@/types/media'

export const MediaSearch = () => {
  const { ref, inView } = useInView()
  const [type, setType] = useQueryState('type', {
    defaultValue: 'movie'
  })
  const [search] = useQueryState('search', {
    defaultValue: ''
  })

  const { data, error, fetchNextPage, hasNextPage, isFetching } =
    useFetchInfiniteSearchMedia(type as MediaType, search as string)

  useEffect(() => {
    if (!type) {
      setType('movie')
    } else if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [type, inView, hasNextPage, setType, fetchNextPage])

  if (error) throw new Error(error.message) // 에러 바운더리로 던짐

  const medias = data?.pages.flatMap((page): MediaResult[] => page.results)

  return (
    <S.Container>
      <Tab title={'검색 결과'} />
      {(medias?.length ?? 0) > 0 ? (
        <Fragment>
          <MediaList
            medias={medias}
            isLoading={isFetching}
          />
          <div
            ref={ref}
            style={{ height: '2px' }}
          />
        </Fragment>
      ) : (
        <S.NoResultText>찾으시는 콘텐츠가 없습니다.</S.NoResultText>
      )}
    </S.Container>
  )
}
