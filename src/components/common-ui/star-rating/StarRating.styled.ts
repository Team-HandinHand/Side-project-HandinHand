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
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
`
