import styled from 'styled-components'

export const TabContainer = styled.div`
  margin-bottom: var(--space-medium);
`

export const Title = styled.h1`
  margin-bottom: var(--space-small);
  font-size: var(--font-large);
  font-weight: 700;
`

export const Tabs = styled.div`
  display: flex;
  height: 40px; // 고정 높이 할당
`

export const Tab = styled.button<{ $isActive: boolean }>`
  cursor: pointer;
  padding: var(--space-medium);
  color: var(--color-white);
  background-color: transparent;
  font-weight: ${({ $isActive }) => $isActive && 700};
  border-bottom: ${({ $isActive }) =>
    $isActive ? `2px solid var(--color-pink)` : 'none'};

  &:hover {
    font-weight: 700;
  }
`
