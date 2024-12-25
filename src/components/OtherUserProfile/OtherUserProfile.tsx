import { useState } from 'react'
import * as S from './OtherUserProfile.styles'

const OtherUserProfile = () => {
  const [isFollow, setIsFollow] = useState(false)

  function handleFollow() {
    setIsFollow(!isFollow)
  }

  function handleCount(category: string) {
    switch (category) {
      case 'follower':
        console.log('팔로워')
        break
      case 'following':
        console.log('팔로잉')
        break
    }
  }

  function handleReview(category: string) {
    switch (category) {
      case 'review':
        console.log('리뷰')
        break
      case 'comment':
        console.log('코멘트')
        break
    }
  }

  function handleStorage(category: string) {
    switch (category) {
      case 'movie':
        console.log('영화')
        break
      case 'series':
        console.log('시리즈')
        break
    }
  }

  return (
    <S.ProfileWrapper>
      <S.ProfileContainer>
        <S.ProfileBackgroundImg>
          <S.ProfileImg></S.ProfileImg>
        </S.ProfileBackgroundImg>
        <S.ProfileInfo>
          <p className="name">민정</p>
          <p className="follow">
            팔로워{' '}
            <span
              className="count"
              onClick={() => handleCount('follower')}>
              5
            </span>{' '}
            | 팔로잉
            <span
              className="count"
              onClick={() => handleCount('following')}>
              {' '}
              289
            </span>
          </p>
          <p className="desc">재미없는 책은..</p>
        </S.ProfileInfo>
        <S.FollowButton onClick={() => handleFollow()}>
          {isFollow === true ? '팔로잉' : '팔로우'}
        </S.FollowButton>
        <S.ProfileReview>
          <S.ProfileReviewContainer onClick={() => handleReview('review')}>
            <span className="count">2029</span>
            <span className="desc">평가</span>
          </S.ProfileReviewContainer>
          <S.ProfileReviewContainer onClick={() => handleReview('comment')}>
            <span className="count">163</span>
            <span className="desc">코멘트</span>
          </S.ProfileReviewContainer>
        </S.ProfileReview>
      </S.ProfileContainer>
      <S.ProfileStorageWrapper>
        <p className="storage-title">보관함</p>
        <S.ProfileStorageContainer>
          <S.ProfileStorageBox onClick={() => handleStorage('movie')}>
            <S.ProfileSubImg>
              <S.TbMovie />
            </S.ProfileSubImg>
            <span className="sub-title">영화</span>
          </S.ProfileStorageBox>
          <S.ProfileStorageBox onClick={() => handleStorage('series')}>
            <S.ProfileSubImg>
              <S.RiMovieLine />
            </S.ProfileSubImg>
            <span className="sub-title">시리즈</span>
          </S.ProfileStorageBox>
        </S.ProfileStorageContainer>
      </S.ProfileStorageWrapper>
    </S.ProfileWrapper>
  )
}

export default OtherUserProfile
