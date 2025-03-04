import styled from 'styled-components'

export const Container = styled.div`
  margin: auto 0;
`

export const Title = styled.div`
  font-size: var(--font-medium);
`

export const PosterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
