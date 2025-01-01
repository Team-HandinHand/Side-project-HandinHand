import styled from 'styled-components'
import {
  FormContainer,
  FormTitle,
  Form,
  FormField,
  InputwithDuplicateBtn,
  FormInput,
  ErrorMessage,
  SuccessMessage
} from '../common-ui/styles/Form.styles'
import { Button } from '@/components'

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

export const ChangeImageButton = styled(Button)``

export {
  FormField,
  InputwithDuplicateBtn,
  FormInput,
  ErrorMessage,
  SuccessMessage
}

export const FormButtonContainer = styled.div`
  display: flex;
  gap: var(--space-small);
  width: 100%;
`

export const CancleButton = styled(Button)`
  flex: 1;
`
export const SubmitButton = styled(Button)`
  flex: 1;
`

export const DeactivateAccountButton = styled(Button)`
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

export const ToastDACancleBtn = styled(Button)``

export const ToastDAAcceptBtn = styled(Button)``
