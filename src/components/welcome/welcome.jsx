import React from "react";
import welcomeImg from "../../assets/img/Yoda.png";
import { Container } from "./welcome-styled";
import NavLink from "../../utils/navlink";
import { useAuth0 } from "@auth0/auth0-react";

const Welcome = () => {
 

  return (
    <Container>
      <h1>Welcome to the Star Wars website</h1>
      <img src={welcomeImg} alt="Yoda"></img>
      <h1> May the Force be with you</h1>

    
        <NavLink to="/starships">
          <button>This is the way</button>
        </NavLink>
      
    </Container>
  );
};

export default Welcome;
