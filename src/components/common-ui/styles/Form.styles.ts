import styled from 'styled-components'
// import { Button } from './button/Button'

export const FormContainer = styled.section`
  width: 100%;
  max-width: 400px;
  text-align: center;
`

export const FormTitle = styled.h1`
  font-size: var(--font-large);
  font-weight: 700;
  margin-bottom: var(--space-large);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-large);
`

export const FormField = styled.div`
  position: relative;
  width: 100%;
`

export const InputwithDuplicateBtn = styled.div`
  display: flex;
  gap: var(--space-small);
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  //컴포넌트로 교체 필요
`

export const BaseMessage = styled.p`
  position: absolute;
  top: 100%;
  left: var(--space-xsmall);
  margin-top: var(--space-xsmall);
`

export const ErrorMessage = styled(BaseMessage)`
  color: var(--color-text-warning);
`

export const SuccessMessage = styled(BaseMessage)`
  color: var(--color-text-gray);
`

export const SubmitButton = styled.button`
  width: 100%;
  //컴포넌트로 교체 필요
`
