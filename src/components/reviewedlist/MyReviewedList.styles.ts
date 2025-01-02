import styled from 'styled-components'

export const ReviewListContainer = styled.section`
  padding: var(--space-large);
  padding: 0 var(--space-xlarge);
  max-width: 1200px;
`

export const ReviewItem = styled.div`
  display: flex;
  gap: 80px;
  padding: var(--space-medium) var(--space-small);
  border-bottom: 1px solid var(--color-dark-gray);
  align-items: center;
`

export const Poster = styled.div`
  img {
    width: 200px;
    height: 310px;
    background-color: var(--color-dark-gray);
    object-fit: cover;
    border-radius: var(--border-radius-medium);
  }
`

export const ReviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-small);
  flex: 1;
`

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-small);
  justify-content: space-between;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-small);

  span {
    font-size: var(--font-medium);
    font-weight: bold;
  }
`

export const Stars = styled.div`
  color: var(--color-pink);
  font-size: var(--font-large);
  margin-bottom: var(--space-xsmall);
`

export const Comment = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  position: relative;
  width: 100%;
  margin-top: var(--space-small);

  span {
    font-size: var(--font-medium);
    font-weight: bold;
    flex-shrink: 0;
  }
`

export const CommentText = styled.p`
  flex: 1;
  color: var(--color-white);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  padding-left: var(--space-small);
  -webkit-line-clamp: 3; /* 최대 3줄 표시 */
  -webkit-box-orient: vertical;
  margin: 0;
`

export const Actions = styled.div`
  display: flex;
  gap: var(--space-small);
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
`
