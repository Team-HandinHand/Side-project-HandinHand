import styled from 'styled-components'

export const StyledInput = styled.input<{
  width?: string
  fontSize?: string
  error?: boolean
}>`
  padding: 10px;
  font-size: ${({ fontSize }) => fontSize || 'var(--font-medium)'};
  border: 1px solid
    ${({ error }) => (error ? 'var(--color-red)' : 'var(--color-gray)')};
  background-color: transparent;
  color: var(--color-white);
  border-radius: var(--border-radius-medium);
  width: ${({ width }) => width || '300px'};
  &:focus {
    outline: none;
    border-color: ${({ error }) =>
      error ? 'var(--color-red)' : 'var(--color-white)'};
  }
`

export const StyledTextarea = styled.textarea<{
  width?: string
  fontSize?: string
  error?: boolean
}>`
  font-family: inherit;
  padding: 10px;
  font-size: ${({ fontSize }) => fontSize || 'var(--font-medium)'};
  border: 1px solid
    ${({ error }) => (error ? 'var(--color-red)' : 'var(--color-gray)')};
  background-color: transparent;
  color: var(--color-white);
  border-radius: var(--border-radius-medium);
  resize: vertical;
  width: ${({ width }) => width || '800px'};
  &:focus {
    outline: none;
    border-color: ${({ error }) =>
      error ? 'var(--color-red)' : 'var(--color-white)'};
  }
`
