import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import waitingComponent from "../../WaitingComponent";
import { lazy } from "react";
const Login = lazy(() => import("../Login/Login"));
const AddNewPost = lazy(() => import("../Container/AddNewPostPage"));
const LandingPage = lazy(() => import("../Container/LandingPage"));
export default function (props) {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={waitingComponent(LandingPage)} />
        <Route exact path="/login" component={waitingComponent(Login)} />
        <Route exact path="/addPost" component={waitingComponent(AddNewPost)} />
      </Switch>
    </>
  );
}
