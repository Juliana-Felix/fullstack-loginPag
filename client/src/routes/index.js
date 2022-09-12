import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import { useSelector } from "react-redux";
import Internal from "../pages/__layouts/Internal";
import { Welcome } from "../pages/Welcome";

export default function Routes() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Switch>
      <Route path="/" exact element={<Welcome />} />
      <Route path="/signin" exact element={<Signin />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route
        path="/home"
        exact
        element={
          currentUser ? (
            <Internal>
              <Home />
            </Internal>
          ) : (
            <Navigate to="/signin" />
          )
        }
      ></Route>
    </Switch>
  );
}
