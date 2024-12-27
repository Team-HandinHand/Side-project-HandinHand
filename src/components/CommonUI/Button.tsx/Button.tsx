import React from 'react'
import { StyledButton } from './Button.styled'

type ButtonColor = 'pink' | 'gray' | 'transparent'
type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
  size?: ButtonSize
  fontSize?: string
  padding?: string
}

const Button = ({
  color = 'pink',
  size = 'medium',
  fontSize,
  padding,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      color={color}
      size={size}
      fontSize={fontSize}
      padding={padding}
      {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
