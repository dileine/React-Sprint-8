import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Error from "../pages/error/error";
import Home from "../pages/home/home";
import Starships from "../pages/starships/starships";
import StarshipsList from "../components/starshipsList/starshipsList";
import Authentication from "../pages/authentication/authentication";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  console.log("PrivateRoute - isAuthenticated:", isAuthenticated);

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/authentication" />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="authentication" element={<Authentication />} />
      <Route
        path="starships/*"
        element={
          <PrivateRoute>
            <Starships />
          </PrivateRoute>
        }
      />
      <Route
        path="starships/:starshipId"
        element={
          <PrivateRoute>
            <StarshipsList />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
