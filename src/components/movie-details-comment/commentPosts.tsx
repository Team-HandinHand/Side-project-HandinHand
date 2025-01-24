import useAuthStateChange from '@/hooks/useAuthStateChange'
import { Button } from '../common-ui/button/Button'
import { Input } from '../common-ui/input/Input'
import { Profile } from '../common-ui/profile/Profile'
import * as S from '../movie-details/MovieDetails.styled'
import { useParams } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postComment } from '@/service/comments/postDetailsComment'
import { TCount } from '@/types/comment'
import { useRating } from '@/hooks/useRating'

export default function CommentPosts({ content, setContent }: TCount) {
  const { mediaId } = useParams<{ mediaId: string }>()
  const { user } = useAuthStateChange()
  const { rating } = useRating()

  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: () => postComment(mediaId, user?.userId, content, rating),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['userComment']
      })
      setContent('')
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
        padding="36px"
        onClick={handleClick}>
        등록
      </Button>
    </S.UserCommentContainer>
  )
}
