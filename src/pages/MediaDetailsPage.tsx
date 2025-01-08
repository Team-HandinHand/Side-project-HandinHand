import StarRating from '@/components/common-ui/star-rating/StarRating'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Input, Profile, Header, PosterBox } from '@/components'
import { MediaType, MovieDetails, TvDetails } from '@/types/media'
import useFetchMovieMoreInfo from '@/hooks/queries/useFetchMediaMoreInfo'
import extractYear from '@/utils/extractYear'

export const MediaDetailsPage = () => {
  const navigate = useNavigate()
  const { type, mediaId } = useParams()

  // 타입 적용
  const typedType = type as MediaType
  const typedId = Number(mediaId)

  const { details, credits, recommendations } = useFetchMovieMoreInfo(
    typedType,
    typedId
  )

  const isMovie = typedType === 'movie'
  const mediaData = details?.data

  const title = isMovie
    ? (mediaData as MovieDetails)?.title
    : (mediaData as TvDetails)?.name
  const releaseYear = isMovie
    ? extractYear((mediaData as MovieDetails)?.release_date)
    : extractYear((mediaData as TvDetails)?.first_air_date)

  return (
    <Container>
      <Header $backgroundColor="black" />
      {/* 첫번째 박스 */}
      <MovieHeaderContainer>
        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>
          <InfoBox>
            <Info>
              {isMovie
                ? (mediaData as MovieDetails)?.original_title
                : (mediaData as TvDetails)?.original_name}
            </Info>
            <Info>{releaseYear}</Info>
            <Info>
              {isMovie
                ? `${(mediaData as MovieDetails)?.runtime}분`
                : `${(mediaData as TvDetails)?.episode_run_time[0]}분`}
            </Info>
            <Info>
              {mediaData?.genres?.map(genre => genre.name).join(' ﹒ ')}
            </Info>
          </InfoBox>

          <MovieDescription>{mediaData?.overview}</MovieDescription>
          <StarRating size={48} />
        </MovieInfo>

        <MoviePoster
          src={`${import.meta.env.VITE_TMDB_IMG_URL}${mediaData?.backdrop_path}`}
          alt={`${title}-poster`}
        />
      </MovieHeaderContainer>

      {/* 두번째 박스 */}
      <SeparatingBox>
        <ShowTypes>콘텐츠 정보</ShowTypes>
        <ShowTypes>관련 콘텐츠</ShowTypes>
        {recommendations?.data?.results?.slice(0, 10).map(recommend => (
          <PosterBox
            key={recommend.id}
            onClick={() =>
              navigate(
                `/media-details/${isMovie ? 'movie' : 'tv'}/${recommend.id}`
              )
            }
            imageUrl={`${import.meta.env.VITE_TMDB_IMG_URL}${recommend.poster_path}`}
            title={title}
            date={releaseYear}
          />
        ))}
      </SeparatingBox>

      <MovieActorContainer>
        <ListsTitle>감독/출연</ListsTitle>
        <ActorBox>
          {credits?.data?.cast?.slice(0, 10).map(actor => (
            <ActorList key={actor.id}>
              <img
                src={`${import.meta.env.VITE_TMDB_IMG_URL}${actor.profile_path}`}
                alt={actor.name}
              />
              <span>{actor.name}</span>
              <span>{actor.character}</span>
            </ActorList>
          ))}
        </ActorBox>
      </MovieActorContainer>

      {/* 세번째 박스 */}
      <UserRateContainer>
        <UserRateTitle>사용자 평</UserRateTitle>

        <UserCommentContainer>
          <Profile onClick={profile} />
          <Input
            type="textarea"
            value=""
            onChange={profile}
            width="100%"
            placeholder="의견을 남겨주세요"
          />
          <Button padding="36px">등록</Button>
        </UserCommentContainer>
      </UserRateContainer>
      <CommentContainer>
        <Profile onClick={profile} />
        <CommentBox>
          <div>전영훈</div>
          <div>재미있는 영화</div>
        </CommentBox>
      </CommentContainer>
    </Container>
  )
}

function profile() {
  console.log('profile')
}

// ✅ component로 분리 필요
import styled from 'styled-components'

//첫번째 박스
export const Container = styled.div`
  width: 80%;
  margin: var(--space-medium) auto;
`

export const MovieHeaderContainer = styled.div`
  display: flex;
  padding: var(--space-large) 48px var(--space-large) 48px;
  margin-bottom: var(--space-large);
  border-bottom: 1px solid black;
`

export const MoviePoster = styled.img`
  max-width: 250px;
  height: auto;
  object-fit: cover;
  aspect-ratio: 2/3;
`

export const MovieInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-medium);
  padding: var(--space-large);
`

export const MovieTitle = styled.h1`
  font-size: var(--font-xlarge);
  font-weight: 700;
`

export const InfoBox = styled.div`
  :nth-child(1) {
    margin-left: 0;
  }
  margin-bottom: var(--space-large);
`

export const Info = styled.span`
  margin: var(--space-small);
`

export const MovieDescription = styled.p`
  font-size: var(--font-medium);
  color: #333;
  max-width: 500px;
  text-overflow: ellipsis;
  margin-bottom: var(--space-large);

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

//두번째 박스

export const MovieActorContainer = styled.div`
  margin-bottom: var(--space-xlarge);
`

export const SeparatingBox = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-medium);
  margin-bottom: var(--space-medium);
  border-top: 1px solid var(--color-dark-gray);
  padding: var(--space-medium);
`
export const ShowTypes = styled.div`
  color: var(--color-dark-gray);
  cursor: pointer;
  padding-bottom: var(--space-medium);
  &:hover {
    color: var(--color-white);
    border-bottom: 1.5px solid var(--color-white);
  }
`

export const ListsTitle = styled.div`
  font-weight: 700;
  padding: var(--space-medium);
`

export const ActorBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--space-medium);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ActorList = styled.div``

// 세번째 박스

export const UserRateContainer = styled.div`
  padding: var(--space-large) 48px var(--space-small) 48px;
`

export const UserRateTitle = styled.div`
  font-weight: 700;
  padding: var(--space-medium);
`

export const UserCommentContainer = styled.div`
  display: flex;
  gap: var(--space-medium);
  margin-bottom: var(--space-xlarge);
`
export const CommentContainer = styled.div`
  display: flex;
  gap: var(--space-small);
  margin-bottom: var(--space-small);
  padding: var(--space-large) 48px var(--space-small) 48px;
`

export const CommentBox = styled.div``
