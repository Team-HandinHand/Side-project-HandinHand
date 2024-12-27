import React from 'react'
import { StyledButton } from './Button.styled'

/*
사용예시 - PR 예시 화면 참고해주세요
      <Button
        color="pink"
        size="small"
        //fontSize="14px" (fontSize ,padding 커스텀 가능)
        >
        수정완료
      </Button>
*/
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
