import { useCommentEdit } from '@/hooks/mutations/useCommentEdit'
import { useRatingStore } from '@/stores/useRatingStore'
import { useState } from 'react'
import styled from 'styled-components'

type CommentEditProps = {
  comment_id: string
  setModifier: React.Dispatch<React.SetStateAction<boolean>>
  comment: string
}
const EditCommentContainer = styled.div`
  background-color: #333;
  padding: var(--space-small);
  border-radius: var(--border-radius-small);
  margin: var(--space-small) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-small);
`

const Textarea = styled.textarea`
  background-color: #222;
  color: white;
  border: none;
  border-radius: var(--border-radius-small);
  padding: var(--space-small);
  font-size: var(--font-medium);
  resize: none;
  min-height: 100px;
  max-height: 150px;
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--space-xsmall);
`

const Button = styled.button`
  background-color: var(--color-pink);
  color: var(--color-white);
  border: none;
  padding: var(--space-xsmall);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  font-size: var(--font-medium);

  &:hover {
    background-color: var(--color-pink-dark);
  }
`

const CancelButton = styled.button`
  background-color: var(--color-pale-gray);
  color: var(--color-black);
  border: none;
  padding: var(--space-xsmall);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  font-size: var(--font-medium);

  &:hover {
    background-color: var(--color-light-gray);
  }
`

function CommentEdit({ comment_id, setModifier, comment }: CommentEditProps) {
  const [newComment, setNewComment] = useState(comment)
  const { rating } = useRatingStore()

  const { updateCommentMutation } = useCommentEdit({
    comment_id,
    newComment,
    rating
  })

  function handleEdit() {
    updateCommentMutation()
    setModifier(false)
  }

  function handleExit() {
    setModifier(false)
  }

  return (
    <EditCommentContainer>
      <Textarea
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
      />
      <ButtonBox>
        <Button onClick={handleEdit}>수정 완료</Button>
        <CancelButton onClick={handleExit}>취소</CancelButton>
      </ButtonBox>
    </EditCommentContainer>
  )
}

export default CommentEdit
