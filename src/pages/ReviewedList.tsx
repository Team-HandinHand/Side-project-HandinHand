import { Back, Button, PosterBox, Tab } from '@/components'
import StarRating from '@/components/common-ui/star-rating/StarRating'
import * as S from '@/components/reviewedlist/MyReviewedList.styles'
import useAuth from '@/hooks/useAuth'
import { useNavigate, useParams } from 'react-router-dom'
import { MediaContainer } from '@/components/media/Media.styles'
import { useDeleteReview } from '@/hooks/mutations/useDeleteReview'
import { Review } from '@/types/review'
import {
  fetchDramaReviews,
  fetchMovieReviews
} from '@/service/review/fetchReview'
import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'
import queryClient from '@/lib/queryClient'

export const ReviewedList = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { userId } = useParams<{ userId: string }>()
  const isMyList = user?.userId === userId

  const parseTabType = (value: string | null): 'movie' | 'tv' | null => {
    if (value === 'movie' || value === 'tv') return value
    return null
  }

  const [activeTab, setActiveTab] = useQueryState<'movie' | 'tv'>('type', {
    parse: parseTabType,
    defaultValue: 'movie'
  })

  const { data: reviews = [], isLoading } = useQuery<Review[]>({
    queryKey: ['reviews', userId, activeTab],
    queryFn: () =>
      activeTab === 'movie'
        ? fetchMovieReviews(userId!)
        : fetchDramaReviews(userId!),
    enabled: !!userId && !!activeTab,
    staleTime: 1000 * 60 * 5,
    placeholderData: () =>
      queryClient.getQueryData(['reviews', userId, activeTab]) as Review[]
  })

  const { mutate: deleteReview } = useDeleteReview()

  const handleEdit = (review: Review) => {
    navigate(
      `/comments/detail/${review.media_type}/${review.id}/${user?.userId}`
    )
  }

  const handleDelete = (commentId: string) => {
    deleteReview({ commentId, type: activeTab })
  }

  return (
    <>
      {!isMyList && <Back />}
      <MediaContainer $isMyList={isMyList}>
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
