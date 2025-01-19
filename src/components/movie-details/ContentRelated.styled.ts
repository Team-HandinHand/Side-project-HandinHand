import styled from 'styled-components'

export const Container = styled.div`
  margin: auto 0;
`

export const Title = styled.div`
  font-size: var(--font-medium);
`

export const PosterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, auto);
`

export const Poster = styled.div`
  height: 20vh;
`
