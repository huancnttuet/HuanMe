import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import MyOneYear from "./views/MyOneYear";
import Timeline from "./views/Timeline";
import E from "./views/E";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

export default function App() {
  return (
    <Router history={browserHistory}>
      <div>
        <Switch>
          <Route exact path="/" name="Home" component={E} />
          <Route exact path="/about" name="About" component={About} />
          <Route exact path="/haha" name="MyOneYear" component={MyOneYear} />
          <Route exact path="/timeline" name="Timeline" component={Timeline} />
        </Switch>
      </div>
    </Router>
  );
}
