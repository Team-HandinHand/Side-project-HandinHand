import styled from 'styled-components'
import { Button } from '@/components'

export const CategoryContainer = styled.div`
  display: flex;
  margin-bottom: var(--space-medium);
  gap: var(--space-medium);
  width: 100%;

  @media (min-width: 1441px) {
    width: 1440px;
  }
`
export const CategoryBtn = styled(Button)`
  border-radius: var(--border-radius-large);
`
