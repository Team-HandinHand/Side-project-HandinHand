import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  html {
    font-size: 100%; /* 16px */
  }

  body {
    font-family: 'Pretendard', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: var(--color-white);
    background-color: var(--color-black);
    font-size: var(--font-medium);
  }

  p, h1, h2, h3, h4, div, span {
    word-break: keep-all;
  }

  button {
    display: inline-block;
    border: none;
    cursor: pointer;
    padding: 0;
    font-size: var(--font-medium);
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--color-white);
  }

  img {
    display: block;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-dark-gray);
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--color-black);
  }

  @media (max-width: 768px) {
    /* 데스크탑 이하 디바이스 */
    html {
      font-size: var(--font-medium);
    }
  }
`

export default GlobalStyle
