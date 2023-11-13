import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavLink from "../../utils/navlink";

const AuthButtons = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleRegister = () => {
    loginWithRedirect({ screen_hint: "signup" });
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name}!</p>
          <button onClick={handleLogout}>Log Out</button>
         <NavLink to="/starships">
         <button>Starships</button>
         </NavLink>
         </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Log In</button>
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;
