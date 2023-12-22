import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/loginButton/LoginButton";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import SignupButton from "../../components/signUpButton/SignupButton";

const Authentication = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <SignupButton />
          <LoginButton />
        </div>
      )}
    </div>
  );
};

export default Authentication;
