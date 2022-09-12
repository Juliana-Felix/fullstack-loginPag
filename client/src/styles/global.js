import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --background: #f0f2f5;
  }

  * {
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html,body, #root {
    height: 100%
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Helvetica', 'sans-serif';
  }

  a {
    text-decoration: none;
    color: #333;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
