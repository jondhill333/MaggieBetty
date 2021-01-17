import { createGlobalStyle } from "styled-components";

import font from "../assets/fonts/glacial-indifference.regular.otf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: GlacialIndifference;
    src: url(${font});
  }
`;

export default Typography;
