import React from "react";
import welcomeImg from "../../assets/img/Yoda.png";
import { Container } from "./welcome-styled";
import NavLink from "../../utils/navlink";

const Welcome = () => {
    return(<Container>
        <h1>Welcome to the Star Wars website</h1>
        <img src={welcomeImg} alt="Yoda"></img>
        <h1> May the Force be with you always!"</h1>

         <NavLink to="/Starships">
			<button>starships</button>
		</NavLink>
    </Container>)
}

export default Welcome;