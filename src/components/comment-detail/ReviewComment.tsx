import StarRating from '../common-ui/star-rating/StarRating'
import * as S from './CommentDetail.styled'
import { Button } from '../common-ui/button/Button'
import { useState } from 'react'
import { Input } from '../common-ui/input/Input'
import { Comment } from '@/types/commentDetail'

export const ReviewComment = ({
  commentData
}: {
  commentData: Comment | undefined
}) => {
  const [isReadOnly, setIsReadOnly] = useState(true)

  const handelEditMode = () => {
    setIsReadOnly(!isReadOnly)
  }

  if (!commentData) {
    return <p>데이터가 없습니다.</p>
  }
  return (
    <S.ReviewCommentContainer>
      <S.RatingSection>
        <div>
          <p>평점</p>
          <StarRating
            size={30}
            initialRating={commentData.rating || 0}
            isReadOnly={isReadOnly}
          />
        </div>
        {!isReadOnly ? (
          <div>
            <Button
              color="transparent"
              size="small"
              fontSize="12px"
              onClick={handelEditMode}>
              취소
            </Button>
            <Button
              size="small"
              fontSize="12px"
              onClick={handelEditMode}>
              수정 완료
            </Button>
          </div>
        ) : (
          <div>
            <Button
              color="transparent"
              size="small"
              fontSize="12px"
              onClick={handelEditMode}>
              수정
            </Button>
            <Button
              color="transparent"
              size="small"
              fontSize="12px">
              삭제
            </Button>
          </div>
        )}
      </S.RatingSection>
      <S.CommentSection $readonly={isReadOnly}>
        <p>평가</p>
        <Input
          readOnly={isReadOnly}
          value={commentData.comment || ''}
          type="textarea"
        />
      </S.CommentSection>
    </S.ReviewCommentContainer>
  )
}
