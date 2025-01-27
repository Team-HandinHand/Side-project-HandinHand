import { Button } from '../common-ui/button/Button'
import useAuth from '@/hooks/useAuth'
import { useParams } from 'react-router-dom'

type HandleFunction = {
  handelEditMode: () => void
  handleSubmit: () => void
  handelDeleteComment: () => void
}
export const CommentEditButton = ({
  isReadOnly,
  handleFunction
}: {
  isReadOnly: boolean
  handleFunction: HandleFunction
}) => {
  const { handelEditMode, handleSubmit, handelDeleteComment } = handleFunction
  const paramsData = useParams()
  const { user: currentUser } = useAuth()

  if (paramsData.userId !== currentUser?.userId) {
    return null
  }

  return (
    <>
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
            onClick={handleSubmit}>
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
            fontSize="12px"
            onClick={handelDeleteComment}>
            삭제
          </Button>
        </div>
      )}
    </>
  )
}
