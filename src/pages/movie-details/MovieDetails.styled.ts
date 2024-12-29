import styled from 'styled-components'

//첫번째 박스
export const Container = styled.div`
  width: 80%;
  margin: 20px auto;
`

export const MovieHeaderContainer = styled.div`
  display: flex;
  padding-bottom: var(--space-large);
  margin-bottom: var(--space-large);
  border-bottom: 1px solid black;
`

export const MoviePoster = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  object-fit: cover;
  aspect-ratio: 2/3;
`

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--space-medium);
`

export const MovieTitle = styled.h1`
  font-size: var(--font-large);
  font-weight: bold;
`

export const InfoBox = styled.div`
  :nth-child(1) {
    margin-left: 0;
  }
`

export const Info = styled.span`
  margin: var(--space-small);
`

export const MovieDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  max-width: 500px;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

//두번째 박스

export const MovieActorContainer = styled.div`
  margin-bottom: var(--space-xlarge);
`

export const SeparatingBox = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-medium);
  margin-bottom: var(--space-medium);
`
export const ShowTypes = styled.div`
  color: var(--color-dark-gray);
  cursor: pointer;
  padding-bottom: var(--space-medium);
  &:hover {
    color: var(--color-white);
    border-bottom: 1.5px solid var(--color-white);
  }
`

export const ListsTitle = styled.div`
  font-weight: 700;
  padding: var(--space-medium);
`

export const ActorBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--space-medium);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ActorList = styled.div``

// 세번째 박스

export const UserRateContainer = styled.div`
  margin-bottom: var(--space-xlarge);
`

export const UserRateTitle = styled.div`
  font-weight: 700;
  padding: var(--space-medium);
`

export const UserCommentContainer = styled.div`
  display: flex;
  gap: var(--space-medium);
  margin-bottom: var(--space-xlarge);
`
export const CommentContainer = styled.div`
  display: flex;
  gap: var(--space-small);
  margin-bottom: var(--space-small);
`

export const CommentBox = styled.div``
