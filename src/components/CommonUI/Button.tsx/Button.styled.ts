import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'

export const colorStyles = {
  pink: css`
    background-color: var(--color-pink);
    color: var(--color-white);
    &:hover {
      background-color: var(--color-pink-dark);
    }
  `,
  gray: css`
    background-color: var(--color-gray);
    color: var(--color-white);
    &:hover {
      background-color: var(--color-dark-gray);
    }
  `,
  transparent: css`
    background-color: transparent;
    color: var(--color-white);
    border: 1px solid var(--color-white);
    &:hover {
      background-color: var(--color-dark-gray);
    }
  `
}

export const sizeStyles = {
  small: css`
    font-size: var(--font-medium);
    max-width: 100px;
  `,
  medium: css`
    font-size: var(--font-medium);
    width: 100px;
  `,
  large: css`
    font-size: var(--font-medium);
    width: 300px;
    font-weight: bold;
  `
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  border: none;
  border-radius: var(--border-radius-medium);
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 10px 10px;

  ${({ color }) => color && colorStyles[color]}
  ${({ size }) => size && sizeStyles[size]}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ padding }) => padding && `padding: ${padding};`}
`
