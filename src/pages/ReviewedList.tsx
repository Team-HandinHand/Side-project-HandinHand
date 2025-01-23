import { Button, PosterBox, Tab } from '@/components'
import StarRating from '@/components/common-ui/star-rating/StarRating'
import * as S from '@/components/reviewedlist/MyReviewedList.styles'
import useAuth from '@/hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../../supabaseConfig'
import { MediaContainer } from '@/components/media/Media.styles'
import { DramaReview, MovieReview, ReviewWithMedia } from '@/types/review'

// 영화 리뷰 데이터
const fetchMovieReviews = async (
  userId: string
): Promise<ReviewWithMedia[]> => {
  const { data, error } = await supabase
    .from('comments')
    .select(
      `
      comment_id,
      media_id: movie_id,
      comment,
      rating,
      created_at,
      movieResults (
        poster_path,
        title
      )
    `
    )
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  return (data as unknown as MovieReview[]).map(item => ({
    comment_id: item.comment_id,
    media_id: item.movie_id,
    comment: item.comment,
    rating: item.rating,
    created_at: item.created_at,
    mediaResults: item.movieResults || { poster_path: null },
    title: item.movieResults?.title || '제목 없음'
  }))
}

// 드라마 리뷰 데이터
const fetchDramaReviews = async (
  userId: string
): Promise<ReviewWithMedia[]> => {
  const { data, error } = await supabase
    .from('drama_comments')
    .select(
      `
      comment_id,
      media_id: drama_id,
      comment,
      rating,
      created_at,
      dramaResults (
        poster_path,
        name
      )
    `
    )
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  return (data as unknown as DramaReview[]).map(item => ({
    comment_id: item.comment_id,
    media_id: item.drama_id,
    comment: item.comment,
    rating: item.rating,
    created_at: item.created_at,
    mediaResults: item.dramaResults || { poster_path: null },
    title: item.dramaResults?.name || '제목 없음'
  }))
}

export const ReviewedList = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<'movie' | 'tv'>('movie')
  const navigate = useNavigate()

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ['reviews', activeTab, user?.userId || ''],
    queryFn: async () => {
      if (activeTab === 'movie') {
        return fetchMovieReviews(user?.userId || '')
      }
      return fetchDramaReviews(user?.userId || '')
    },
    enabled: !!user?.userId
  })

  const handleDelete = async (commentId: string) => {
    try {
      const tableName = activeTab === 'movie' ? 'comments' : 'drama_comments'

      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('comment_id', commentId)

      if (error) {
        throw new Error(error.message)
      }
    } catch (error) {
      console.error('리뷰 삭제 중 오류 발생:', error)
    }
  }

  const handleEdit = (mediaId: string) => {
    const mediaType = activeTab === 'movie' ? 'movie' : 'tv'
    navigate(`/media-details/${mediaType}/${mediaId}`)
  }

  return (
    <MediaContainer>
      <S.ReviewListContainer>
        <Tab
          title={`${user?.nickname}의 평가 목록`}
          onTabChange={tab => setActiveTab(tab as 'movie' | 'tv')}
        />
        {reviews.map(review => (
          <S.ReviewItem key={review.comment_id}>
            <PosterBox
              key={review.comment_id}
              imageUrl={
                review.mediaResults?.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${review.mediaResults.poster_path}`
                  : '/default-poster.png'
              }
              isLoading={isLoading}
              onClick={() => handleEdit(review.media_id)}
              pointer></PosterBox>
            <S.ReviewDetails>
              <S.Title>{review.title}</S.Title>
              <S.RatingWrapper>
                <S.Rating>
                  <span>별점</span>
                  <StarRating
                    size={28}
                    initialRating={review.rating || 0}
                    isReadOnly={true}
                  />
                </S.Rating>
                <S.Actions>
                  <Button
                    color="transparent"
                    size="small"
                    fontSize="12px"
                    onClick={() => handleEdit(review.media_id)}>
                    수정
                  </Button>
                  <Button
                    color="transparent"
                    size="small"
                    fontSize="12px"
                    onClick={() => handleDelete(review.comment_id)}>
                    삭제
                  </Button>
                </S.Actions>
              </S.RatingWrapper>
              <S.Comment>
                <span>평가</span>
                <S.CommentText>
                  {review.comment || '작성된 댓글이 없습니다.'}
                </S.CommentText>
              </S.Comment>
            </S.ReviewDetails>
          </S.ReviewItem>
        ))}
      </S.ReviewListContainer>
    </MediaContainer>
  )
}
