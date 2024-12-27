import React from 'react'
import * as S from './Input.styled'

/*
사용예시 - PR 예시 화면 참고해주세요
      <InputField
        placeholder="이메일(example@email.com)"
        value={email}
        onChange={e => setEmail(e.target.value)}
        //type="textarea" (textarea일때 명시)
        //(fontSize, width 커스텀 가능)
      />
*/

interface InputProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'textarea'
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  width?: string
  fontSize?: string
}

const InputField = ({
  placeholder,
  type = 'text',
  value,
  onChange,
  width,
  fontSize
}: InputProps) => {
  return (
    <S.InputWrapper>
      {type === 'textarea' ? (
        <S.StyledTextarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          width={width}
          fontSize={fontSize}
        />
      ) : (
        <S.StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          width={width}
          fontSize={fontSize}
        />
      )}
    </S.InputWrapper>
  )
}

export default InputField
