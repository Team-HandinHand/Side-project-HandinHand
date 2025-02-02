import styled from 'styled-components'

//첫번째 박스
export const Container = styled.div`
  width: 80%;
  margin: var(--space-medium) auto;
`

export const MovieHeaderContainer = styled.div`
  display: flex;
  padding: var(--space-large) 48px var(--space-large) 48px;
  margin-bottom: var(--space-large);
  border-bottom: 1px solid black;
`

export const MoviePoster = styled.img`
  max-width: 250px;
  height: auto;
  object-fit: cover;
  aspect-ratio: 2/3;
`

export const MovieInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-medium);
  padding: var(--space-large) var(--space-large) 0 var(--space-large);
`

export const MovieTitle = styled.h1`
  font-size: var(--font-xlarge);
  font-weight: 700;
`

export const InfoBox = styled.div`
  :nth-child(1) {
    margin-left: 0;
  }
  margin-bottom: var(--space-large);
`

export const Info = styled.span`
  margin: var(--space-small);
`

export const MovieDescription = styled.p<{ isExpanded: boolean }>`
  font-size: var(--font-medium);
  color: #333;
  max-width: 500px;

  display: -webkit-box;
  -webkit-line-clamp: ${props =>
    props.isExpanded ? 'unset' : '3'}; // 3줄로 제한
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ShowMoreButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color-white);
  cursor: pointer;
  font-size: var(--font-small);
  width: 100%;
  max-width: 500px;
  text-align: right;

  &:hover {
    text-decoration: underline;
  }
`

export const RatingBox = styled.div`
  display: flex;
  gap: var(--space-small);
`

export const RatingGuide = styled.div`
  //font-size의 경우, 토큰내에서 적절한 크기가 없어 커스텀하였습니다.
  font-size: 12px;
  //margin-top의 경우 토큰내에서 적절한 크기가 없어 커스텀하였습니다.
  margin-top: 11.5px;
  text-align: center;
  color: var(--color-gray);
`

export const AverageBox = styled.div`
  font-size: 40px;
  text-align: center;
  div {
    font-size: var(--font-small);
    text-align: center;
    letter-spacing: 10%;
  }
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
  border-top: 1px solid var(--color-dark-gray);
  padding: var(--space-medium);
`
export const ShowTypes = styled.div<{ isActive: boolean }>`
  color: var(--color-dark-gray);
  cursor: pointer;
  padding-bottom: var(--space-medium);
  &:hover {
    color: var(--color-white);
    border-bottom: 1.5px solid var(--color-white);
  }

  ${props =>
    props.isActive &&
    `
    color: var(--color-white);
    border-bottom: 1.5px solid var(--color-white);
  `}
`

export const ListsTitle = styled.div`
  font-weight: 700;
  padding: var(--space-medium);
`

export const ActorBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: var(--space-medium);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ActorList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 60%;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  }

  span {
    margin-top: 8px;
    text-align: center;
  }
`

// 세번째 박스

export const UserRateContainer = styled.div`
  padding: var(--space-large) 48px var(--space-small) 48px;
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
  padding: var(--space-large) var(--space-small) var(--space-small)
    var(--space-small);
`

export const CommentBox = styled.div`
  margin-left: var(--space-xsmall);
  width: 100%;
`

export const BoxForFlex = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CommentInfoBox = styled.div`
  display: flex;
  align-items: center;
`

export const UpdatedTimeBox = styled.span`
  margin-left: var(--space-xsmall);
  font-size: var(--font-small);
  color: var(--color-light-gray);
`
export const DeleteEditBox = styled.span``

export const ButtonForDeleteEdit = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: var(--font-medium);
  margin-left: var(--space-small);

  &:hover {
    opacity: 0.8;
  }
`
