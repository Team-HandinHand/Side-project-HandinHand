import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'

interface ProfileWrapperProps {
  left: string
  top: string
}

export const ProfileWrapper = styled.div<ProfileWrapperProps>`
  width: 15%;
  height: 18vh;
  background-color: var(--color-profile-background);
  border-radius: var(--border-radius-medium);
  display: flex;
  flex-direction: row;
  position: absolute;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  z-index: 1;
  padding: var(--space-small);
`

export const ProfileImg = styled.div`
  width: 30%;
  height: 8vh;
  border-radius: var(--border-radius-xlarge);
  background-color: var(--color-white);
  position: absolute;
  top: 10%;
  left: 2%;
`
export const ProfileContainer = styled.div`
  width: 60%;
  height: 90%;
  position: absolute;
  top: 20%;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ProfileName = styled.div`
  font-size: var(--font-large);
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 1vh;
`
export const ProfileContainerBox = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: row;
  gap: 10%;
`

export const ProfileBox = styled.div`
  width: 45%;
  height: 70%;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ReviewCounter = styled.div`
  color: var(--color-text-dark);
  font-size: var(--font-large);
  font-weight: 700;
  cursor: pointer;
`

export const Bookmark = styled.div`
  color: var(--color-text-dark);
  font-size: var(--font-large);
  font-weight: 700;
  cursor: pointer;
`

export const subText = styled.div`
  color: var(--color-text-gray);
`
export const CloseIcon = styled(IoMdClose)`
  cursor: pointer;
  width: 13%;
  height: 5vh;
  right: 0.1%;
  position: absolute;
  color: var(--color-black);
`
