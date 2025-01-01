import styled from 'styled-components'

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-medium);
`
export const LabelContainer = styled.div`
  display: flex;
  margin-bottom: var(--space-medium);
  width: 100%;
  @media (min-width: 1441px) {
    width: 1440px;
  }
`

export const PosterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(212px, 1fr));
  @media (min-width: 1441px) {
    width: 1440px;
  }
`

export const TestLabel = styled.div`
  margin-right: 10px;
  font-size: var(--font-medium);
  padding: var(--space-small);
  color: #333;
  border: 1px solid #333;
  border-radius: var(--border-radius-large);
`
