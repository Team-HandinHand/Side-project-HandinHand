import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
`

export const SkeletonBox = styled.div<{ flex?: boolean }>`
  background: linear-gradient(
    90deg,
    var(--color-light-gray),
    var(--color-gray)
  );
  background-size: 200% 100%;
  animation: ${loading} 1.5s infinite;
  border-radius: var(--border-radius-small);
`

export const SkeletonContainer = styled(SkeletonBox)`
  ${props => (props.flex ? 'height:150px;' : '')}
  width: ${props => (props.flex ? '100%' : '212px')};
  display: ${props => (props.flex ? 'flex' : 'inline-block')};
  margin: var(--space-small);
  background: none;
`

export const SkeletonImage = styled(SkeletonBox)`
  width: ${props => (props.flex ? '100px' : '212px')};
  height: ${props => (props.flex ? '150px' : '318px')};
`

export const SkeletonContentBox = styled.div<{ flex?: boolean }>`
  ${props => (props.flex ? 'align-self: center' : '')};
  ${props => (props.flex ? 'margin-left: var(--space-medium)' : '')};
  width: ${props => (props.flex ? '60%' : '100%')};
  display: flex;
  flex-direction: column;
  gap: var(--space-small);
`

export const SkeletonTitle = styled(SkeletonBox)`
  width: ${props => (props.flex ? '60%' : '100%')};
  height: 1.25rem;
  margin-top: var(--space-small);
`

export const SkeletonDescription = styled(SkeletonBox)`
  width: ${props => (props.flex ? '40%' : '100%')};
  height: 0.75rem;
  margin-top: var(--space-small);
`
export const SkeletonProfile = styled(SkeletonBox)`
  width: 50px;
  height: 50px;
  border-radius: var(--border-radius-xlarge);
`
export const SkeletonGalleryImage = styled(SkeletonBox)`
  width: 431px;
  height: 287px;
`
