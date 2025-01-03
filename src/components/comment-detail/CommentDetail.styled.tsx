import styled from 'styled-components'

export const PageContainer = styled.div`
  padding: var(--space-large);
  display: flex;
  flex-direction: column;
  align-items: center;
  > svg {
    color: var(--color-light-gray);
    width: 20px;
    height: 16px;
    margin-right: auto;
    margin-bottom: var(--space-xxlarge);
  }
`
export const ContentsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContentsHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  font-size: var(--font-small);
`
export const WrittenDate = styled.div``

export const ContentsMain = styled.div`
  width: 80%;
`

export const ReviewCommentContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const RatingSection = styled.div`
  display: flex;
  gap: var(--space-small);
  margin-top: var(--space-medium);
  div {
    font-weight: bold;
  }
`
export const CommentSection = styled.div<{ readonly: boolean }>`
  display: flex;
  gap: var(--space-small);
  margin-top: var(--space-medium);
  div:first-child {
    font-weight: bold;
  }
  textarea {
    width: 100%;
    height: 400px;
    background-color: var(--color-dark-gray);
    color: var(--color-white);
    font-size: var(--font-medium);
    font-weight: normal;
    border: none;
    resize: none;
    padding: var(--space-small);
    ${({ readonly }) =>
      readonly &&
      `
    background-color: var(--color-black);

    &:focus {
      outline: none;
    }
    `}
  }
`
