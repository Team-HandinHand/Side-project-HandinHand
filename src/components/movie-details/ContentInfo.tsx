import { useParams } from 'react-router-dom'
import * as S from './MovieDetails.styled'
import useFetchMovieMoreInfo from '@/hooks/queries/useFetchMediaMoreInfo'
import { MediaType } from '@/types/media'
import CommentPosts from '../movie-details-comment/commentPosts'
import CommentList from '../movie-details-comment/commentList'
import { useState } from 'react'
import useFetchUserComment from '@/hooks/queries/useFetchUserComment'

type ICommentItemProps = {
  comment_id: string
  user_id: string
  comment: string
  created_at: string
  updated_at?: string
  movie_id: string
  rating: number
}

export default function ContentInfo() {
  const [content, setContent] = useState('')
  const { type, mediaId } = useParams()
  const typedType = type as MediaType
  const typedId = Number(mediaId)
  const { credits } = useFetchMovieMoreInfo(typedType, typedId)

  const commentsData = useFetchUserComment(typedId)

  return (
    <>
      <S.MovieActorContainer>
        <S.ListsTitle>감독/출연</S.ListsTitle>
        <S.ActorBox>
          {credits?.data?.cast?.slice(0, 12).map(actor => (
            <S.ActorList key={actor.id}>
              <img
                src={`${import.meta.env.VITE_TMDB_IMG_URL}${actor.profile_path}`}
                alt={actor.name}
              />
              <span>{actor.name}</span>
              <span>{actor.character}</span>
            </S.ActorList>
          ))}
        </S.ActorBox>
      </S.MovieActorContainer>

      {/* 세번째 박스 */}
      <S.UserRateContainer>
        <S.UserRateTitle>사용자 평</S.UserRateTitle>

        <CommentPosts
          content={content}
          setContent={setContent}
        />
        {commentsData?.map((data: ICommentItemProps) => (
          <CommentList
            key={data.comment_id}
            commentUserId={data.user_id}
            comment={data.comment}
            movie_id={data.movie_id}
            createAt={data.created_at}
            updatedAt={data.updated_at}
            comment_id={data.comment_id}
            rating={data.rating}
          />
        ))}
      </S.UserRateContainer>
    </>
  )
}
