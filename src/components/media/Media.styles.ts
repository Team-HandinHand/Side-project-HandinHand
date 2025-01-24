import styled from 'styled-components'
interface MediaContainerProps {
  isMyList?: boolean
}

export const MediaContainer = styled.div<MediaContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  padding-top: ${({ isMyList }) => (isMyList === false ? '80px' : '0px')};
`

export const PosterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(212px, 1fr));
  @media (min-width: 1441px) {
    width: 1440px;
  }
`
