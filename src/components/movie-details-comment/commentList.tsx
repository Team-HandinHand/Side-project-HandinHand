import fetchUserProfile from '@/services/auth/fetchUserProfile'
import { Profile } from '../common-ui/profile/Profile'
import * as S from '../movie-details/MovieDetails.styled'
import { useQuery } from '@tanstack/react-query'
import getTimeAgo from '@/utils/getTimeAgo'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useState } from 'react'
import CommentEdit from './commentEdit'
import { useCommentDelete } from '@/hooks/mutations/useCommentDelete'
import useAuth from '@/hooks/useAuth'
import StarRating from '../common-ui/star-rating/StarRating'

type TComment = {
  key: string
  commentUserId: string
  comment: string
  createAt: string
  updatedAt?: string
  movie_id?: string
  comment_id: string
  rating: number
}

type UserProfile = {
  nickname: string
  profile_picture_path: string
}

export default function CommentList({
  key,
  commentUserId,
  comment,
  createAt,
  updatedAt,
  comment_id,
  rating
}: TComment) {
  const [modifier, setModifier] = useState(false)
  const { user } = useAuth()

  const { data } = useQuery<UserProfile>({
    queryKey: ['user', commentUserId],
    queryFn: () => fetchUserProfile(commentUserId)
  })

  //댓글삭제
  const { deleteCommentMutation } = useCommentDelete(comment_id)

  function handleDelete() {
    deleteCommentMutation()
  }

  function handleEdit() {
    setModifier(true)
  }

  return (
    <S.CommentContainer key={key}>
      <Profile imageUrl={data?.profile_picture_path} />
      <S.CommentBox>
        <div>
          <S.BoxForFlex>
            <div>
              <S.CommentInfoBox>
                <div style={{ fontSize: 'var(--font-medium)' }}>
                  {data?.nickname}
                  {user?.userId === commentUserId && '🎆'}
                </div>

                {rating ? (
                  <StarRating
                    size={18}
                    isReadOnly={true}
                    CommentRating={rating}
                  />
                ) : (
                  ''
                )}

                <S.UpdatedTimeBox>
                  {updatedAt !== createAt
                    ? `${getTimeAgo(updatedAt!)} (수정됨)`
                    : getTimeAgo(createAt)}
                </S.UpdatedTimeBox>
              </S.CommentInfoBox>
            </div>
            {user?.userId === commentUserId && (
              <S.DeleteEditBox>
                <S.ButtonForDeleteEdit
                  type="button"
                  onClick={handleEdit}>
                  <span>수정</span>
                  <AiFillEdit />
                </S.ButtonForDeleteEdit>
                <S.ButtonForDeleteEdit
                  type="button"
                  onClick={handleDelete}>
                  <span>삭제</span>
                  <MdDelete />
                </S.ButtonForDeleteEdit>
              </S.DeleteEditBox>
            )}
          </S.BoxForFlex>
        </div>
        {modifier ? (
          <CommentEdit
            comment_id={comment_id}
            setModifier={setModifier}
            comment={comment}
          />
        ) : (
          <div>{comment}</div>
        )}
      </S.CommentBox>
    </S.CommentContainer>
  )
}
