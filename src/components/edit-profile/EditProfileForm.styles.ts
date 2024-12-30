import styled from 'styled-components'
import {
  FormContainer,
  FormTitle,
  Form,
  FormField,
  InputwithDuplicateBtn,
  Input,
  ErrorMessage,
  SuccessMessage
} from '../common-ui/styles/Form.styles'

export const EditProfileFormContainer = FormContainer

export const EditProfileFormTitle = FormTitle

export const EditProfileForm = Form

export const ProfileImg = styled.img`
  border-radius: var(--border-radius-xlarge);
  width: 150px;
  object-fit: contain;
  margin-bottom: calc(var(--space-medium) * -1);
`

export const PictureInput = styled.input`
  display: none;
`

export const ChangeImageButton = styled.button``

export { FormField, InputwithDuplicateBtn, Input, ErrorMessage, SuccessMessage }

export const FormButtonContainer = styled.div`
  display: flex;
  gap: var(--space-small);
  width: 100%;
`

export const CancleButton = styled.button`
  //컴포넌트로 교체 필요
  flex: 1;
`
export const SubmitButton = styled.button`
  flex: 1;
`

export const DeactivateAccountButton = styled.button`
  //컴포넌트로 교체 필요
  margin-top: var(--space-large);
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
