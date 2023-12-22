import logo from "../../assets/img/logoStarWars.png";
import NavBarButtons from "../navBarButtons/NavBarButtons";
import { Container } from "./header-styled";


const Header = () => {
    return(
    <Container>
    <div>
    <img src={logo} alt="Star Wars logo" />
     </div>
     <div>
     <NavBarButtons/>
     </div>
    </Container>)
}

export default Header;