import { useParams } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import * as S from '../movie-details/MovieDetails.styled'
import { Button } from '../common-ui/button/Button'
import { Input } from '../common-ui/input/Input'
import { Profile } from '../common-ui/profile/Profile'
import { postComment } from '@/service/comments/postDetailsComment'
import { TCount } from '@/types/comment'
import useUserStore from '@/stores/useUserStore'
import { useRatingStore } from '@/stores/useRatingStore'

export default function CommentPosts({ content, setContent }: TCount) {
  const { type, mediaId } = useParams()
  const { user } = useUserStore()
  const { rating } = useRatingStore()

  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: () => postComment(type, mediaId, user?.userId, content, rating),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['userComment']
      })
      setContent('')
      toast.success('평가가 등록되었습니다!')
    },
    onError: error => {
      toast.error(error.message || '댓글을 추가하는 중 오류가 발생했습니다.')
    }
  })

  function handleClick() {
    mutate()
  }

  return (
    <S.UserCommentContainer>
      <Profile imageUrl={user?.profilePicturePath} />
      <Input
        type="textarea"
        value={content}
        onChange={e => setContent(e.target.value)}
        width="100%"
        placeholder="의견을 남겨주세요"
      />
      <Button
        padding="24px"
        onClick={handleClick}>
        등록
      </Button>
    </S.UserCommentContainer>
  )
}
