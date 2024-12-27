import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-medium);
`

export const StyledInput = styled.input<{ width?: string; fontSize?: string }>`
  padding: 10px;
  font-size: ${({ fontSize }) => fontSize || 'var(--font-medium)'};
  border: 1px solid var(--color-gray);
  background-color: transparent;
  color: var(--color-white);
  border-radius: var(--border-radius-medium);
  width: ${({ width }) => width || '300px'};
  &:focus {
    outline: none;
    border-color: var(--color-white);
  }
`

export const StyledTextarea = styled.textarea<{
  width?: string
  fontSize?: string
}>`
  font-family: inherit;
  padding: 10px;
  font-size: ${({ fontSize }) => fontSize || 'var(--font-medium)'};
  border: 1px solid var(--color-gray);
  background-color: transparent;
  color: var(--color-white);
  border-radius: var(--border-radius-medium);
  resize: vertical;
  width: ${({ width }) => width || '800px'};
  &:focus {
    outline: none;
    border-color: var(--color-white);
  }
`
