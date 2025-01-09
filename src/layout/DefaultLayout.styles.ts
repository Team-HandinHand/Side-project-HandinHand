import styled from 'styled-components'

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 화면 전체 높이 사용 */
`

export const OutletContainer = styled.section`
  flex: 1;
  position: relative;
  padding: var(--space-large); // 헤더 패딩보다 조금 크게
  padding-top: var(--space-small); // 위쪽 패딩은 작게
`
