import styled from 'styled-components'

export const PageContainer = styled.div`
  padding: var(--space-large);
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContentsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: var(--space-xxlarge);
`
export const ContentsHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  font-size: var(--font-small);
  > a {
    width: 70%;
  }
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
  justify-content: space-between;
  gap: var(--space-small);
  margin-top: var(--space-medium);
  > div {
    font-weight: bold;
    display: flex;
    align-items:center;
    gap: 5px;
  }

  }
`
export const CommentSection = styled.div<{ readonly: boolean }>`
  display: flex;
  gap: var(--space-small);
  margin-top: var(--space-medium);
  p {
    font-weight: bold;
  }
  textarea {
    width: 100%;
    height: 400px;
    background-color: var(--color-dark-gray);
    color: var(--color-white);
    font-size: var(--font-medium);
    font-weight: normal;
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
