import logo from "../../assets/img/logoStarWars.png";
import { Container } from "./header-styled";


const Header = () => {
    return(
    <Container>
    <div>
    <img src={logo} alt="Star Wars logo" />
     </div>
    </Container>)
}

export default Header;