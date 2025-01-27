import StarRating from '../common-ui/star-rating/StarRating'
import * as S from './CommentDetail.styled'
import { useRef, useState } from 'react'
import { Input } from '../common-ui/input/Input'
import { Comment } from '@/types/commentDetail'
import { useCommentDelete } from '@/hooks/mutations/useCommentDelete'
import { useCommentEdit } from '@/hooks/mutations/useCommentEdit'
import { CommentEditButton } from './CommentEditButton'
import toast from 'react-hot-toast'
import { useRating } from '@/hooks/useRating'
import { useParams } from 'react-router-dom'

export const ReviewComment = ({
  commentData
}: {
  commentData: Comment | undefined
}) => {
  const paramsData = useParams()
  const [isReadOnly, setIsReadOnly] = useState(true)
  const commentRef = useRef<HTMLInputElement>(null)
  const [commentValue, setCommentValue] = useState(commentData?.comment || '')
  const { rating, setRating } = useRating()

  const { updateCommentMutation } = useCommentEdit({
    types: paramsData.type as 'movie' | 'tv',
    comment_id: commentData?.comment_id || '',
    newComment: commentRef.current?.value || '',
    rating: rating
  })
  const { deleteCommentMutation } = useCommentDelete(
    commentData?.comment_id || '',
    paramsData.type as 'movie' | 'tv'
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (commentRef.current) {
      setCommentValue(e.target.value)
      commentRef.current.value = e.target.value
    }
  }

  const handelDeleteComment = () => {
    if (window.confirm('선택한 댓글을 삭제하시겠습니까?')) {
      deleteCommentMutation()
    }
  }

  const handelEditMode = () => {
    setIsReadOnly(!isReadOnly)
    setRating(commentData?.rating || 0)
    if (!isReadOnly) {
      if (commentRef.current?.value === '') {
        setCommentValue(commentData?.comment || '')
      }
    }
  }
  const handleSubmit = () => {
    if (commentRef.current?.value === '') {
      toast.error('댓글을 입력해주세요.')
      return
    } else {
      updateCommentMutation()
      setIsReadOnly(!isReadOnly)
    }
  }

  const handleFunction = {
    handelEditMode,
    handleSubmit,
    handelDeleteComment
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
            CommentRating={commentData.rating || 0}
            isReadOnly={isReadOnly}
          />
        </div>
        <CommentEditButton
          isReadOnly={isReadOnly}
          handleFunction={handleFunction}
        />
      </S.RatingSection>
      <S.CommentSection $readonly={isReadOnly}>
        <p>평가</p>
        <Input
          readOnly={isReadOnly}
          value={commentValue}
          type="textarea"
          ref={commentRef}
          onChange={handleChange}
        />
      </S.CommentSection>
    </S.ReviewCommentContainer>
  )
}
