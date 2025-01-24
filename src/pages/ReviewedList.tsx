import { Back, Button, PosterBox, Tab } from '@/components'
import StarRating from '@/components/common-ui/star-rating/StarRating'
import * as S from '@/components/reviewedlist/MyReviewedList.styles'
import useAuth from '@/hooks/useAuth'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { MediaContainer } from '@/components/media/Media.styles'
import useFetchReview from '@/hooks/queries/useFetchReview'
import { useDeleteReview } from '@/hooks/mutations/useDeleteReview'

export const ReviewedList = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<'movie' | 'tv'>('movie')
  const navigate = useNavigate()
  const { userId } = useParams()
  const isMyList = user?.userId === userId

  const { data: reviews = [], isLoading } = useFetchReview(
    user?.userId,
    activeTab
  )
  const { mutate: deleteReview } = useDeleteReview()

  const handleEdit = (mediaId: string) => {
    const mediaType = activeTab === 'movie' ? 'movie' : 'tv'
    navigate(`/media-details/${mediaType}/${mediaId}`)
  }
  const handleDelete = (commentId: string) => {
    deleteReview({ commentId, type: activeTab })
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
    </>
  )
}
