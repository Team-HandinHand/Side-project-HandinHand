import { Button, Tab } from '@/components'
import StarRating from '@/components/common-ui/star-rating/StarRating'
import * as S from '@/components/reviewedlist/MyReviewedList.styles'
import useAuthStateChange from '@/hooks/useAuthStateChange'
import { useState } from 'react'

const mockReviews = [
  {
    id: 1,
    poster: '/assets/img/test/image.png',
    rating: 3,
    comment: '2024년 가장 기억에 남는 영화'
  },
  {
    id: 2,
    poster: '/assets/img/test/image.png',
    rating: 4,
    comment:
      '긴텍스트 test : Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the  Lorem Ipsum is simply dummy text of the  Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the  Lorem Ipsum is simply dummy text of the  Lorem Ipsum is simply dummy text of the   .'
  },
  {
    id: 3,
    poster: '/assets/img/test/image.png',
    rating: 3,
    comment: '긴텍스트 tests : Lorem Ipsum is simply dummy text.'
  },
  {
    id: 4,
    poster: '/assets/img/test/image.png',
    rating: 5,
    comment: '완벽한 작품이었어요!'
  }
]

export const ReviewedList = () => {
  const [reviews] = useState(mockReviews)
  const { user } = useAuthStateChange()
  const username = user?.nickname

  return (
    <S.ReviewListContainer>
      <Tab title={`${username}의 평가 목록`} />
      {reviews.map(review => (
        <S.ReviewItem key={review.id}>
          <S.Poster>
            <img
              src={review.poster}
              alt="영화 포스터"
            />
          </S.Poster>
          <S.ReviewDetails>
            <S.RatingWrapper>
              <S.Rating>
                <span>별점</span>
                <StarRating
                  size={28}
                  initialRating={review.rating}
                  isReadOnly={true}
                />
              </S.Rating>
              <S.Actions>
                <Button
                  color="transparent"
                  size="small"
                  fontSize="12px">
                  수정
                </Button>
                <Button
                  color="transparent"
                  size="small"
                  fontSize="12px">
                  삭제
                </Button>
              </S.Actions>
            </S.RatingWrapper>
            <S.Comment>
              <span>평가</span>
              <S.CommentText>{review.comment}</S.CommentText>
            </S.Comment>
          </S.ReviewDetails>
        </S.ReviewItem>
      ))}
    </S.ReviewListContainer>
  )
}
