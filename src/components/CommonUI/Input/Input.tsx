import React from 'react'
import { InputWrapper, StyledInput, StyledTextarea } from './Input.styled'

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
    <InputWrapper>
      {type === 'textarea' ? (
        <StyledTextarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          width={width}
          fontSize={fontSize}
        />
      ) : (
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          width={width}
          fontSize={fontSize}
        />
      )}
    </InputWrapper>
  )
}

export default InputField
