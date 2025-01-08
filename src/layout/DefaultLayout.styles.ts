import styled from 'styled-components'

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 화면 전체 높이 사용 */
`

export const OutletContainer = styled.section`
  flex: 1;
  position: relative;
  padding: var(--space-medium); // 헤더 패딩과 같음
`
