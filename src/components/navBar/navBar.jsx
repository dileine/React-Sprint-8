import React from "react";
import { useReducer } from "react";
import { Container } from "./navBar-styled";
import NavLink from "../../utils/navlink";
import { SwitchNavLink } from "../../utils/switchNavLink";

const NavBar = () => {

    const [state, dispatch] = useReducer(SwitchNavLink, { home: false, starships: true });
    const { home, starships } = state;

    
    return(<Container>
    <ul>
        <li
          onClick={() => dispatch({type: "homeClick"})}
          className={home ? "active" : ""}>
          <NavLink className="link" to="">Home</NavLink>
        </li>
        <li
          onClick={() => dispatch({type: "starshipsClick"})}
          className={starships ? "active" : ""}>
          <NavLink className="link" to="/starships">Starships</NavLink>
        </li>
      </ul>
    </Container>
   )
}


export default NavBar;