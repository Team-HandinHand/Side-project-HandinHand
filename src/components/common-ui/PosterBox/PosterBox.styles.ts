import type {
  ContentBoxProps,
  MovieImageBoxProps,
  PosterBoxContainerProps
} from '@/types/components'
import styled from 'styled-components'

export const PosterBoxContainer = styled.div<PosterBoxContainerProps>`
  width: ${props => (props.flex ? '70%' : '212px')};
  display: ${props => (props.flex ? 'flex' : 'inline-block')};
  margin: var(--space-small);
`
export const MovieImageBox = styled.img<MovieImageBoxProps>`
  width: ${props => (props.flex ? '150px' : '212px')};
  height: ${props => (props.flex ? '240px' : '318px')};
  border-radius: var(--border-radius-small);
`
export const ContentBox = styled.div<ContentBoxProps>`
  ${props => (props.flex ? 'align-self: center' : '')};
  ${props => (props.flex ? 'margin-left: var(--space-medium)' : '')};
`
export const ContentTitle = styled.div`
  font-size: var(--font-medium);
  border-radius: var(--border-radius-small);
  margin-top: var(--space-medium);
`
export const ContentDescription = styled.div`
  font-size: var(--font-small);
  color: var(--color-text-gray);
  border-radius: var(--border-radius-small);
  margin-top: var(--space-medium);
`
