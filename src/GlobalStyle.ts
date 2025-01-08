import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

        /** colors **/
        --color-black: #000000;
        --color-white: #ffffff;
        --color-dark-gray: #555555;
        --color-gray: #777777;
        --color-light-gray: #999999;
        --color-pale-gray: #D9D9D9;
        --color-pink: #FC1287;
        --color-pink-dark: #E21079;
        --color-red: #FF2A2A;
       
        /** text-colors **/
        --color-text-dark: #292A32;
        --color-text-gray: #747474;
        --color-text-pink: #FF2F62;
        --color-text-warning: #FF5454;

    /** font-size **/
    /* Headlines */
    --font-xxlarge: clamp(4rem, 5rem, 6rem);
    --font-xlarge: clamp(2rem, 3rem, 4rem);
    --font-large: clamp(1.25rem, 1.5rem, 2rem);
    
    /* Paragraph */
    --font-medium: clamp(0.75rem, 1rem, 1.25rem);
    --font-small: clamp(0.25rem, 0.5rem, 0.75rem);

    /** border radius **/
    --border-radius-small: 5px;
    --border-radius-medium: 10px;
    --border-radius-large: 20px;
    --border-radius-xlarge: 50%;

    /** space-size **/
    --space-xsmall: 4px;
    --space-small: 8px;
    --space-medium: 16px;
    --space-large: 32px;
    --space-xlarge: 64px;
    --space-xxlarge: 128px;
  }

  * {
    box-sizing: border-box;
  }

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
    cursor: default;
  }

  p, h1, h2, h3, h4, div, span {
    word-break: keep-all;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--color-white);
  }

  img {
    display: block;
  }

  @media (max-width: 768px) {
    /* 데스크탑 이하 디바이스 */
    html {
      font-size: var(--font-medium);
    }
  }
`

export default GlobalStyle
