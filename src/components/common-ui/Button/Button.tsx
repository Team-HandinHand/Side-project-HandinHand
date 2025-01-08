import { StyledButton } from './Button.styles'
import { ButtonProps } from '@/types/button'

/*
사용예시 - PR 예시 화면 참고해주세요
      <Button
        color="pink"
        size="small"
        //fontSize="14px" (fontSize ,padding,disabled 커스텀 가능)
        >
        수정완료
      </Button>
*/

export const Button = ({
  color = 'pink',
  size = 'medium',
  fontSize,
  padding,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      $color={color}
      $size={size}
      $fontSize={fontSize}
      $padding={padding}
      {...props}>
      {children}
    </StyledButton>
  )
}
