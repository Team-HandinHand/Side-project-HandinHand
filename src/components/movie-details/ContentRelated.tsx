import { useNavigate, useParams } from 'react-router-dom'
import * as S from './ContentRelated.styled'
import { MediaType } from '@/types/media'
import { PosterBox } from '../common-ui/poster/PosterBox'
import useFetchMovieMoreInfo from '@/hooks/queries/useFetchMediaMoreInfo'

export default function ContentRelated() {
  const { type, mediaId } = useParams()
  const navigate = useNavigate()
  const typedType = type as MediaType
  const typedId = Number(mediaId)

  const { recommendations } = useFetchMovieMoreInfo(typedType, typedId)
  const isMovie = typedType === 'movie'

  return (
    <S.Container>
      <S.Title>비슷한 콘텐츠</S.Title>
      <S.PosterBox>
        {recommendations?.data?.results?.slice(0, 12).map(recommend => (
          <PosterBox
            key={recommend.id}
            onClick={() => {
              navigate(
                `/media-details/${isMovie ? 'movie' : 'tv'}/${recommend.id}`
              )
            }}
            imageUrl={`${import.meta.env.VITE_TMDB_IMG_URL}${recommend.poster_path}`}
          />
        ))}
      </S.PosterBox>
    </S.Container>
  )
}
