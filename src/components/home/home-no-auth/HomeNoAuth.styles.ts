import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`

export const Title = styled.h1`
  font-size: var(--font-large);
  font-weight: bold;
  margin-bottom: var(--space-medium);
`

export const SubTitle = styled.h2`
  font-size: var(--font-large);
  margin-bottom: var(--space-large);
`

export const PopularMediaSliderWrapper = styled.div`
  margin-top: var(--space-xlarge);
  min-height: 400px;
  position: relative; // 로더 띄우기 위해
`
