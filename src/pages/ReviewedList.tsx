import { Back, Button, PosterBox, Tab } from '@/components'
import StarRating from '@/components/common-ui/star-rating/StarRating'
import * as S from '@/components/reviewedlist/MyReviewedList.styles'
import useAuth from '@/hooks/useAuth'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MediaContainer } from '@/components/media/Media.styles'
import { useDeleteReview } from '@/hooks/mutations/useDeleteReview'

import { Review } from '@/types/review'
import {
  fetchDramaReviews,
  fetchMovieReviews
} from '@/service/review/fetchReview'

export const ReviewedList = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<'movie' | 'tv'>('movie')
  const navigate = useNavigate()
  const { userId } = useParams<{ userId: string }>()
  const isMyList = user?.userId === userId

  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!userId) return

    const fetchReviews = async () => {
      setIsLoading(true)
      try {
        const fetchedReviews =
          activeTab === 'movie'
            ? await fetchMovieReviews(userId)
            : await fetchDramaReviews(userId)
        setReviews(fetchedReviews)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, [userId, activeTab])

  const { mutate: deleteReview } = useDeleteReview()

  const handleEdit = (review: Review) => {
    navigate(
      `/comments/detail/${review.media_type}/${review.id}/${user?.userId}`
    )
  }

  const handleDelete = (commentId: string) => {
    deleteReview(
      { commentId, type: activeTab },
      {
        onSuccess: () => {
          setReviews(prevReviews =>
            prevReviews.filter(review => review.comment_id !== commentId)
          )
        },
        onError: error => {
          console.error('리뷰 삭제 중 오류 발생:', error)
        }
      }
    )
  }

  return (
    <>
      {!isMyList && <Back />}
      <MediaContainer isMyList={isMyList}>
        <S.ReviewListContainer>
          <Tab
            title={
              isMyList
                ? `${user?.nickname}의 평가 목록`
                : `${userId} 님의 평가 목록`
            }
            onTabChange={tab => setActiveTab(tab as 'movie' | 'tv')}
          />
          {reviews.map(review => (
            <S.ReviewItem key={review.comment_id}>
              <PosterBox
                imageUrl={
                  review.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${review.poster_path}`
                    : '/default-poster.png'
                }
                isLoading={isLoading}
                onClick={() => handleEdit(review)}
                pointer
              />
              <S.ReviewDetails>
                <S.Title>{review.title}</S.Title>
                <S.RatingWrapper>
                  <S.Rating>
                    <span>별점</span>
                    <StarRating
                      size={28}
                      initialRating={review.rating || 0}
                      isReadOnly
                    />
                  </S.Rating>
                  {isMyList && (
                    <S.Actions>
                      <Button
                        color="transparent"
                        size="small"
                        fontSize="12px"
                        onClick={() => handleEdit(review)}>
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
                  )}
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
    </>
  )
}
