import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #F0F0F5;
    --red: #E02041;
    --white: #FFFFFF;
    --black: #000000;
    --gray: #DCDCE5;
    --gray-300: #A8A8B3;
  }

  * {
    padding: 0;
    margin: 0;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  html  {
    /* font-size: calc(60% + 0.8vmin); */
    font-size: 62.5%; /* 10px */
  }

  body {
    background-color: var(--bg);
  }

  body, button, input, textarea {
    /* intervalo de tamanho (minimo, padrao, maximo) */
    font-size: clamp(14px, 1.6rem, 2vw);
    font-family: 'Roboto', sans-serif;
  }

  button {
    height: 6rem;
    width: 35.1rem;
    font-weight: bold;
    font-size: 1.8rem;
  }
`;

const theme: DefaultTheme = {

}

export { GlobalStyle, theme };