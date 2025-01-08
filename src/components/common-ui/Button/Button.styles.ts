import { StyledButtonProps } from '@/types/button'
import styled, { css } from 'styled-components'

// 공동 disabled 스타일
const disabledStyle = css`
  background-color: var(--color-dark-gray);
`
export const colorStyles = {
  pink: css`
    background-color: var(--color-pink);
    color: var(--color-white);
    &:hover {
      background-color: var(--color-pink-dark);
    }
    &:disabled {
      ${disabledStyle}
    }
  `,
  gray: css`
    background-color: var(--color-gray);
    color: var(--color-white);
    &:hover {
      background-color: var(--color-dark-gray);
    }
    &:disabled {
      ${disabledStyle}
    }
  `,
  transparent: css`
    background-color: transparent;
    color: var(--color-white);
    border: 1px solid var(--color-white);
    &:hover {
      background-color: var(--color-dark-gray);
    }
    &:disabled {
      ${disabledStyle}
      border: none;
    }
  `
}

export const sizeStyles = {
  small: css`
    font-size: var(--font-medium);
  `,
  medium: css`
    font-size: var(--font-medium);
  `,
  large: css`
    font-size: var(--font-medium);
    font-weight: 700;
  `
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-block;
  border: none;
  border-radius: var(--border-radius-medium);
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: var(--space-small);
  white-space: nowrap;

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  ${({ $color }) => $color && colorStyles[$color]}
  ${({ $size }) => $size && sizeStyles[$size]}
  ${({ $fontSize }) => $fontSize && `font-size: ${$fontSize};`}
  ${({ $padding }) => $padding && `padding: ${$padding};`}

  @media (max-width: 576px) {
    font-size: var(--font-small);
    font-weight: 700;
  }
`
