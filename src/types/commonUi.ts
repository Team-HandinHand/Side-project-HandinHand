import { NavLinkProps } from 'react-router-dom'
import { IconBaseProps } from 'react-icons'

// header
export interface HeaderProps {
  $backgroundColor: 'white' | 'black'
}

export interface HeaderLiProps {
  $signedUp: boolean
  $active: boolean
}

export interface HeaderLinkProps extends NavLinkProps {
  $signedUp?: boolean
}

export interface HeaderIconProps extends IconBaseProps {
  $active: boolean
}

// Input
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type?: 'text' | 'textarea' | 'email' | 'password'
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

// Profile
export type ProfileButtonSize = 'small' | 'medium' | 'large' | string

export interface ProfileButtonProps {
  imageUrl?: string
  altText?: string
  onClick?: () => void
  size?: ProfileButtonSize
}

// Button
type ButtonColor = 'pink' | 'gray' | 'transparent'
type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
  size?: ButtonSize
  fontSize?: string
  padding?: string
  isActive?: boolean
}

// DOM으로 전달되는 스타일 관련 props에 $ prefix 사용
export interface StyledButtonProps {
  $color?: ButtonColor
  $size?: ButtonSize
  $fontSize?: string
  $padding?: string
  $isActive?: boolean
}
