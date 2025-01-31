import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
`

export const SkeletonBox = styled.div`
  background: linear-gradient(
    90deg,
    var(--color-light-gray),
    var(--color-gray)
  );
  background-size: 200% 100%;
  animation: ${loading} 1.5s infinite;
  border-radius: var(--border-radius-small);
`
export const ReviewCommentContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-weight: bold;
  }
  > div {
    display: flex;
    display: flex;
    gap: var(--space-small);
    margin-top: var(--space-medium);
  }
`
export const RatingSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--space-small);
  margin-top: var(--space-medium);
  > div {
    width: 100%;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: var(--space-small);
  }
`
export const RatingSkeleton = styled(SkeletonBox)`
  width: 30%;
  height: 30px;
`

export const CommentSection = styled(SkeletonBox)`
  width: 100%;
  height: 400px;
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  font-size: var(--font-medium);
  font-weight: normal;
  resize: none;
  padding: var(--space-small);
`
export const WrittenDate = styled(SkeletonBox)`
  width: 20%;
  height: 10px;
`
