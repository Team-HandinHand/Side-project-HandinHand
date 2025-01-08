import styled from 'styled-components'

export const Tabs = styled.div`
  display: flex;
  border-bottom: 0.5px solid var(--color-light-gray);
  margin-bottom: var(--space-medium);
`

export const Tab = styled.button<{ $isActive: boolean }>`
  cursor: pointer;
  padding: var(--space-medium);
  color: var(--color-white);
  background-color: transparent;
  font-weight: ${({ $isActive }) => $isActive && 700};
  border-bottom: ${({ $isActive }) =>
    $isActive && `3px solid var(--color-white)`};

  &:hover {
    font-weight: 700;
  }
`
