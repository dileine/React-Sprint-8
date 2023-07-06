import { createGlobalStyle } from "styled-components";
import background from "../../assets/img/background.png"

export const GlobalStyles = createGlobalStyle`
html {
  font-size: "62.5%";
}
body {
  font-family: "Jura", sans-serif;
  background-image: url(${background});
  color:"#111";
}
`;