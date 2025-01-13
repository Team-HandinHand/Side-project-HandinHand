import * as S from './Input.styles'
import { forwardRef } from 'react'
import { InputProps } from '@/types/commonUi'

/*
사용예시 - PR 예시 화면 참고해주세요
      <Input
        placeholder="평가를 입력해주세요"
        //type="textarea" (textarea일때 명시)
        //(fontSize, width 커스텀 가능)
        register={register('comment')}
        error={!errors.comment}
      />
*/

export const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>((props, ref) => {
  const { type, width, fontSize, error, ...rest } = props

  const commonProps = {
    $width: width,
    $fontSize: fontSize,
    $error: error,
    autoComplete: 'off',
    ...rest
  }

  return (
    <>
      {type === 'textarea' ? (
        <S.StyledTextarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...commonProps}
        />
      ) : (
        <S.StyledInput
          type={type}
          ref={ref as React.Ref<HTMLInputElement>}
          {...commonProps}
        />
      )}
    </>
  )
})
