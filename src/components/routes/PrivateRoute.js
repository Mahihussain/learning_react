import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../Private/NavBar/NavBar";
import waitingComponent from "../../WaitingComponent";
import SideBar from "../Private/SideBar/SideBar";
import { lazy } from "react";
const Dashboard = lazy(() => import("../Private/Dashboard/Dasboard"));

export default function (props) {
  return (
    <>
      <NavBar />
      <div className="wrapper d-flex">
        <div className="sideMenu">
          <SideBar />
        </div>
        <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 my-3">
                  lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom
                  lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom
                </div>
              </div>
              <Switch>
                <Route
                  exact
                  path={"/"}
                  component={waitingComponent(Dashboard)}
                />
              </Switch>
            </div>
        </div>
      </div>
    </>
  );
}
