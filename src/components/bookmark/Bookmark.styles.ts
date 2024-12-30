import styled from 'styled-components'

export const BookmarkContainer = styled.section`
  padding: var(--space-large);
  padding: 0 var(--space-xlarge);
`

export const PosterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--space-medium);
  margin-top: var(--space-large);
`

export const PosterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: var(--border-radius-medium);
  overflow: hidden;
`

export const PosterImage = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  border-radius: var(--border-radius-medium);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const PosterInfo = styled.div`
  width: 100%;
  padding: var(--space-small) var(--space-xsmall);
  text-align: center;
`

export const PosterTitle = styled.p`
  font-size: var(--font-medium);
  font-weight: bold;
  color: var(--color-white);
  margin-bottom: var(--space-xsmall);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const PosterDate = styled.p`
  font-size: var(--font-medium);
  color: var(--color-light-gray);
  margin: 0;
`
