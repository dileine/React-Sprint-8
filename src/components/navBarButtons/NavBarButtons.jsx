import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/loginButton/LoginButton";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import SignupButton  from "../../components/signUpButton/SignupButton";
import { Container } from "./NavBarButtons-styled";

export const NavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Container>
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </Container>
  );
};