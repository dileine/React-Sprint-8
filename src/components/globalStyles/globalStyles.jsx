import { createGlobalStyle } from "styled-components";
import background from "../../assets/img/background.png"

export const GlobalStyles = createGlobalStyle`
*{
	font-family: "Jura", sans-serif;
}
html {
  font-size: "62.5%";
}
body {	
  background-image: url(${background});
  color:"#111";
}

button {
		width: 12rem;
		background-color: ${({ theme }) => theme.colors.background};
		padding: 1rem;
		font-size: 1.3rem;
		color: ${({ theme }) => theme.colors.font};
		border: 0.1rem solid transparent;
		border-radius: 0.5rem;
		text-transform: uppercase;
		cursor: pointer;
	} 

  button:hover {
    border: 0.1rem solid ${({ theme }) => theme.colors.border};
    border-radius: 1rem;
  }
`;