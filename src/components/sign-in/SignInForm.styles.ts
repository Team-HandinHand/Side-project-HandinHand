import styled from 'styled-components'
import {
  FormContainer,
  FormTitle,
  Form,
  FormField,
  FormInput,
  ErrorMessage,
  SubmitButton
} from '../common-ui/styles/Form.styles'

export const SignInFormContainer = FormContainer

export const SignInFormTitle = FormTitle

export const SignInForm = Form

export { FormField, FormInput, ErrorMessage, SubmitButton }

export const ToSignUpText = styled.a`
  margin-top: var(--space-large);
  display: block;
  color: var(--color-text-gray);
  text-decoration: underline;
  transition: color 0.3s;

  &:hover {
    color: var(--color-white);
  }
`
