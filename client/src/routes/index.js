import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Signin } from "../pages/signin/Signin";
import { Signup } from "../pages/signup/Signup";
import { Welcome } from "../pages/welcome/Welcome";
import { useSelector } from "react-redux";
import Internal from "../pages/__layouts/Internal";


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
