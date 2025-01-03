import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const StarContainer = styled.div`
  display: flex;
`
export const Stars = styled.span<{ size: number }>`
  display: block;
  cursor: pointer;
  width: ${({ size }) => (size ? `${size}px` : '36px')};
  height: ${({ size }) => (size ? `${size}px` : '36px')};
`
