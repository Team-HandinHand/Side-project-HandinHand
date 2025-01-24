import { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from '@/components/movie-details/MovieDetails.styled'
import { MediaType, MovieDetails, TvDetails } from '@/types/media'
import StarRating from '@/components/common-ui/star-rating/StarRating'
import ContentInfo from '@/components/movie-details/ContentInfo'
import ContentRelated from '@/components/movie-details/ContentRelated'
import useFetchMovieMoreInfo from '@/hooks/queries/useFetchMediaMoreInfo'
import extractYear from '@/utils/extractYear'

export const MediaDetailsPage = () => {
  const [showType, setShowType] = useState<'content' | 'related'>('content')
  const { type, mediaId } = useParams()

  // 타입 적용
  const typedType = type as MediaType
  const typedId = Number(mediaId)

  const { details } = useFetchMovieMoreInfo(typedType, typedId)

  const isMovie = typedType === 'movie'
  const mediaData = details?.data

  const title = isMovie
    ? (mediaData as MovieDetails)?.title
    : (mediaData as TvDetails)?.name
  const releaseYear = isMovie
    ? extractYear((mediaData as MovieDetails)?.release_date)
    : extractYear((mediaData as TvDetails)?.first_air_date)

  return (
    <S.Container>
      {/* 첫번째 박스 */}
      <S.MovieHeaderContainer>
        <S.MovieInfo>
          <S.MovieTitle>{title}</S.MovieTitle>
          <S.InfoBox>
            <S.Info>
              {isMovie
                ? (mediaData as MovieDetails)?.original_title
                : (mediaData as TvDetails)?.original_name}
            </S.Info>
            <S.Info>{releaseYear}</S.Info>
            <S.Info>
              {isMovie
                ? `${(mediaData as MovieDetails)?.runtime}분`
                : `${(mediaData as TvDetails)?.episode_run_time[0]}분`}
            </S.Info>
            <S.Info>
              {mediaData?.genres?.map(genre => genre.name).join(' ﹒ ')}
            </S.Info>
          </S.InfoBox>

          <S.MovieDescription>{mediaData?.overview}</S.MovieDescription>
          <StarRating size={48} />
        </S.MovieInfo>

        <S.MoviePoster
          src={`${import.meta.env.VITE_TMDB_IMG_URL}${mediaData?.backdrop_path}`}
          alt={`${title}-poster`}
        />
      </S.MovieHeaderContainer>

      {/* 두번째 박스 */}
      <S.SeparatingBox>
        <S.ShowTypes
          onClick={() => setShowType('content')}
          isActive={showType === 'content'}>
          콘텐츠 정보
        </S.ShowTypes>
        <S.ShowTypes
          onClick={() => setShowType('related')}
          isActive={showType === 'related'}>
          관련 콘텐츠
        </S.ShowTypes>
      </S.SeparatingBox>
      {showType === 'content' ? (
        <ContentInfo />
      ) : (
        <ContentRelated setShowType={setShowType} />
      )}
    </S.Container>
  )
}
