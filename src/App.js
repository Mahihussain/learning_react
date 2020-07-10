import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import PostContextProvider from "./context/PostContext";
import GuestRoute from "./components/routes/GuestRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import ErrorComponent from "./components/Errors/ErrorComponent";

function App() {
  return (
    <div className="App">
      <PostContextProvider>
        <Router>
          <Switch>
            <Route path="/private" component={PrivateRoute} />
            <Route path="/" component={GuestRoute} />
            <Route component={ErrorComponent} />
          </Switch>
        </Router>
      </PostContextProvider>
    </div>
  );
}

export default App;
