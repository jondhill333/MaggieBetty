import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --logoWhite: #fafafa;
    --maisieYellow: #FDF998;
    --maisieBrown: #E0823D;
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --otherGrey: #212529;
    --deepBlue:  #141c3a;
    --orange: orange;
  }
  html {
      font-size: 10px;
  }
  body {
      background-color: var(--logoWhite);

`;

export default GlobalStyles;
