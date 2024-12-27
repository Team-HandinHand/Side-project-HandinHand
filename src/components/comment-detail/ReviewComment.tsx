import StarRating from '../common-ui/star-rating/StarRating'
import * as S from './CommentDetail.styled'

interface comment {
  commentData: string
  readonly: boolean
}
export const ReviewComment = ({ commentData, readonly }: comment) => {
  return (
    <S.ReviewCommentContainer>
      <S.RatingSection>
        <div>평점</div>
        <StarRating size={30} />
      </S.RatingSection>
      <S.CommentSection readonly={readonly}>
        <div>평가</div>
        <textarea readOnly={readonly}>{commentData}</textarea>
      </S.CommentSection>
    </S.ReviewCommentContainer>
  )
}
