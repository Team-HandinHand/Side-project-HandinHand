import styled from 'styled-components'

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-large);
`

export const PosterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(212px, 1fr));
  @media (min-width: 1441px) {
    width: 1440px;
  }
`
