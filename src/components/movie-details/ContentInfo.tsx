import { Button } from '../common-ui/button/Button'
import { Input } from '../common-ui/input/Input'
import { Profile } from '../common-ui/profile/Profile'
import * as S from './MovieDetails.styled'

export default function ContentInfo() {
  return (
    <>
      <S.MovieActorContainer>
        <S.ListsTitle>감독/출연</S.ListsTitle>
        <S.ActorBox>
          <S.ActorList>가</S.ActorList>
          <S.ActorList>나</S.ActorList>
          <S.ActorList>다</S.ActorList>
          <S.ActorList>라</S.ActorList>
          <S.ActorList>마</S.ActorList>
        </S.ActorBox>
      </S.MovieActorContainer>

      {/* 세번째 박스 */}
      <S.UserRateContainer>
        <S.UserRateTitle>사용자 평</S.UserRateTitle>

        <S.UserCommentContainer>
          <Profile onClick={profile} />
          <Input
            type="textarea"
            value=""
            onChange={profile}
            width="100%"
            placeholder="의견을 남겨주세요"
          />
          <Button padding="36px">등록</Button>
        </S.UserCommentContainer>
      </S.UserRateContainer>
      <S.CommentContainer>
        <Profile onClick={profile} />
        <S.CommentBox>
          <div>전영훈</div>
          <div>재미있는 영화</div>
        </S.CommentBox>
      </S.CommentContainer>
    </>
  )
}

function profile() {
  console.log('profile')
}
