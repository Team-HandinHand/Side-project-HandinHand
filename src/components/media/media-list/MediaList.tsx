import * as S from './MediaList.styles'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PosterBox } from '@/components'
import { MediaListProps } from '@/types/media'
import checkIsMovie from '@/utils/checkIsMovie'

export const MediaList = ({ medias, isLoading, flex }: MediaListProps) => {
  const navigate = useNavigate()
  const [, setSearchParams] = useSearchParams()

  return (
    <S.PosterContainer>
      {medias?.map(media => (
        <PosterBox
          key={media.id}
          flex={flex}
          title={checkIsMovie(media) ? media.title : media.name}
          imageUrl={`${import.meta.env.VITE_TMDB_IMG_URL}${media.poster_path}`}
          date={checkIsMovie(media) ? media.release_date : media.first_air_date}
          isLoading={isLoading}
          onClick={() => {
            setSearchParams({}) // 모든 쿼리 파라미터 제거
            navigate(
              `/media-details/${checkIsMovie(media) ? 'movie' : 'tv'}/${media.id}`
            )
          }}
        />
      ))}
    </S.PosterContainer>
  )
}
