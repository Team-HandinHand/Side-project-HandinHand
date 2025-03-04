import styled, { css } from 'styled-components'
import {
  IoIosArrowForward as RightIcon,
  IoIosArrowBack as LeftIcon
} from 'react-icons/io'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-large);
  cursor: default;
  overflow: hidden;
`

const baseButtonStyle = css`
  position: fixed;
  bottom: 170px;
  font-size: var(--font-xlarge);
  cursor: pointer;
  z-index: 2;

  @media (width <= 1400px) {
    bottom: 200px;
  }
`

export const LeftButton = styled(LeftIcon)`
  ${baseButtonStyle}
  left: 100px;

  @media (width <= 1400px) {
    left: 10px;
  }
`

export const RightButton = styled(RightIcon)`
  ${baseButtonStyle}
  right: 60px;

  @media (width <= 1400px) {
    right: 6px;
  }
`

export const PosterWrapper = styled.div`
  margin-left: 85px;
  display: flex;
  align-items: center;
  gap: var(--space-xlarge);
`

export const PosterBoxWrapper = styled.div`
  position: relative;
`
export const Rank = styled.div<{ $isLast: boolean }>`
  position: absolute;
  top: -20px;
  left: ${({ $isLast }) => ($isLast ? '-50px' : '-40px')};
  font-size: var(--font-xlarge);
  font-weight: bold;
`
