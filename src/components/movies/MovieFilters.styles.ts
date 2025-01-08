import styled from 'styled-components'

export const LabelContainer = styled.div<{ activeIndex: number | null }>`
  display: flex;
  margin-bottom: var(--space-medium);
  width: 100%;
  button {
    width: auto;
    border: 1px solid var(--color-light-gray);
    border-radius: var(--border-radius-large);
    margin-right: 10px;

    ${({ activeIndex }) =>
      activeIndex !== null &&
      `
      &:nth-child(${activeIndex + 1}) {
        background-color: var(--color-white);
        color: var(--color-black);
        border-color: none;
      }
    `}
  }
  @media (min-width: 1441px) {
    width: 1440px;
  }
`

export const TestLabel = styled.div`
  margin-right: 10px;
  font-size: var(--font-medium);
  padding: var(--space-small);
  color: #333;
  border: 1px solid #333;
  border-radius: var(--border-radius-large);
`
