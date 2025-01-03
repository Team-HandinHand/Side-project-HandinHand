type ButtonColor = 'pink' | 'gray' | 'transparent'
type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
  size?: ButtonSize
  fontSize?: string
  padding?: string
}

// DOM으로 전달되는 스타일 관련 props에 $ prefix 사용
export interface StyledButtonProps {
  $color?: ButtonColor
  $size?: ButtonSize
  $fontSize?: string
  $padding?: string
}
