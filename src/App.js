import { THEME } from "./constants/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles/globalStyles";
import Router from "./routes/router";
import Header from "./components/header/header";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <header>
        <Header />
        <NavBar />
      </header>
      <main>
        <Router />
      </main>
    </ThemeProvider>
  );
}

export default App;
