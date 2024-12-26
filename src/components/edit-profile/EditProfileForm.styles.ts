import styled from 'styled-components'
import { IoArrowBack } from 'react-icons/io5'

export const BackIcon = styled(IoArrowBack)`
  cursor: pointer;
`

export const EditProfileFormContainer = styled.section``

export const EditProfileFormTitle = styled.h1``

export const EditProfileForm = styled.form``

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`

export const PictureInput = styled.input`
  display: none;
`

export const ChangeImageButton = styled.button``

export const FormField = styled.div``

export const Input = styled.input`
  //컴포넌트로 교체 필요
`

export const ErrorMessage = styled.p``

export const FormButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const CancleButton = styled.button`
  //컴포넌트로 교체 필요
`

export const SubmitButton = styled.button`
  //컴포넌트로 교체 필요
`

export const DeactivateAccountButton = styled.button`
  //컴포넌트로 교체 필요
`

// 계정 해지 확인 토스트
export const ToastDAContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-medium);
  align-items: center;
`

export const ToastDABtnContainer = styled.div`
  display: flex;
  gap: var(--space-medium);
`

export const ToastDACancleBtn = styled.button`
  //컴포넌트로 교체 필요
`

export const ToastDAAcceptBtn = styled.button`
  //컴포넌트로 교체 필요
`
