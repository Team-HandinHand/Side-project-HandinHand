import styled from 'styled-components'

export const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const PosterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(212px, 1fr));
  @media (min-width: 1441px) {
    width: 1440px;
  }
`
