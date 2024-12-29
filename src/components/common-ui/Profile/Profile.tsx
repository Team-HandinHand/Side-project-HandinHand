import { ProfileButtonProps } from '@/types/profile'
import * as S from './Profile.styles'

/* 사용예시 
      <ProfileButton
        //image={} (넣을 이미지가 있을때, 명시안해주면 기본프로필)
        //altText="User Profile"
        onClick={handleProfileClick}
        size="large"
      />
      <ProfileButton 
        onClick={handleProfileClick}
        size="100px" // custom size
      />
      - 마이페이지 프로필: large
      - 댓글 작성 프로필: medium
      - 댓글 조회 프로필: small   이외에 커스텀 가능
*/

const Profile = ({
  imageUrl,
  altText = 'Profile',
  onClick,
  size = 'medium'
}: ProfileButtonProps) => {
  return (
    <S.ProfileButtonWrapper
      onClick={onClick}
      size={size}>
      <S.ProfileImage
        src={imageUrl}
        alt={altText}
      />
    </S.ProfileButtonWrapper>
  )
}

export default Profile
