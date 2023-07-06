import React from "react";
import { useReducer } from "react";
import { Container } from "./navBar-styled";
import NavLink from "../../utils/navlink";
import { SwitchNavLink } from "../../utils/switchNavLink";

const NavBar = () => {

    const [state, dispatch] = useReducer(SwitchNavLink, { home: false, starShips: true });
    const { home, starShips } = state;

    
    return(<Container>
    <ul>
        <li
          onClick={() => dispatch({type: "homeClick"})}
          className={home ? "actiu" : ""}>
          <NavLink className="link" to="">Home</NavLink>
        </li>
        <li
          onClick={() => dispatch({type: "starshipsClick"})}
          className={starShips ? "actiu" : ""}>
          <NavLink className="link" to="">Starships</NavLink>
        </li>
      </ul>
    </Container>
   )
}


export default NavBar;