import React from 'react'
import * as S from './ProfileModal.styled'
import { Profile } from '@/components'
interface ProfileModalProps {
  onClose: () => void
  position: { left: string; top: string }
}

export const modalPosition = (event: React.MouseEvent<HTMLButtonElement>) => {
  const button = event.currentTarget.getBoundingClientRect()
  const offsetX = 60
  const offsetY = -150
  return {
    left: button.left + offsetX + 'px',
    top: button.top + offsetY + 'px'
  }
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  onClose,
  position
}) => {
  const handleProfileClick = () => {}

  return (
    <S.ProfileWrapper
      left={position.left}
      top={position.top}>
      <Profile
        imageUrl="https://cdn.greenpostkorea.co.kr/news/photo/201609/67077_50854_art_1474594867.jpg"
        altText="Profile"
        onClick={handleProfileClick}
        size="95px"
      />
      <S.ProfileContainer>
        <S.ProfileName>민정</S.ProfileName>
        <S.ProfileContainerBox>
          <S.ProfileBox>
            <S.ReviewCounter>193</S.ReviewCounter>
            <S.subText>평가</S.subText>
          </S.ProfileBox>
          <S.ProfileBox>
            <S.Bookmark>5</S.Bookmark>
            <S.subText>즐겨찾기</S.subText>
          </S.ProfileBox>
        </S.ProfileContainerBox>
      </S.ProfileContainer>
      <S.CloseIcon onClick={onClose} />
    </S.ProfileWrapper>
  )
}
