import { Button, ActiveTab } from '@/components'
import * as S from '@/components/reviewedlist/MyReviewedList.styles'
import { useState } from 'react'

const mockReviews = [
  {
    id: 1,
    poster: '/image.png',
    rating: 5,
    comment: '2024년 가장 기억에 남는 영화'
  },
  {
    id: 2,
    poster: '/image.png',
    rating: 4,
    comment:
      "긴텍스트 test : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets conLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con"
  },
  {
    id: 3,
    poster: '/image.png',
    rating: 3,
    comment:
      '긴텍스트 tests :  xt oLorem Ipsum is simply dummy text oLorem Ipsum is simply dummy text oply dummy text oy dummy text orem Ipsum is simply dummy text omy text o'
  },
  {
    id: 4,
    poster: '/image.png',
    rating: 5,
    comment: '완벽한 작품이었어요!'
  }
]
export const ReviewedList = () => {
  const [activeTab, setActiveTab] = useState<'영화' | '시리즈'>('영화')
  const username = '홍길동' // 예시 이름

  return (
    <S.ReviewListContainer>
      <ActiveTab
        title={`${username}의 평가 목록`}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {mockReviews.map(review => (
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
                <S.Stars>{'★'.repeat(review.rating)}</S.Stars>
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
