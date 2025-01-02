import { UseFormRegisterReturn } from 'react-hook-form'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type?: 'text' | 'textarea' | 'email' | 'password'
  register?: UseFormRegisterReturn
  width?: string
  fontSize?: string
  error?: boolean
}

// DOM으로 전달되는 스타일 관련 props에 $ prefix 사용
export interface StyledInputProps {
  $width?: string
  $fontSize?: string
  $error?: boolean
}
