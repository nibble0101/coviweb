import React from "react";
import Display from "./dashboard/Display";
import About from "./about/About";
import Visualization from "./visualization/Visualization";
import Press from "./press/Press";
import { Route, Switch, Redirect } from "react-router-dom";
function Main(props) {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard" component={Display} />
        <Route path="/about" component={About} />
        <Route path="/visualization" component={Visualization} />
        <Route path="/press" component={Press} />
      </Switch>
    </React.Fragment>
  );
}

export default Main;
