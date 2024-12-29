import styled from 'styled-components'
import {
  FormContainer,
  FormTitle,
  Form,
  FormField,
  Input,
  ErrorMessage,
  SubmitButton
} from '../common-ui/formStyle/formStyle.styles'

export const SignInFormContainer = FormContainer

export const SignInFormTitle = FormTitle

export const SignInForm = Form

export { FormField, Input, ErrorMessage, SubmitButton }

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
