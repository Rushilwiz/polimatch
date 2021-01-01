import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import About from "./components/About";
import Main from "./components/Main";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Main} path="/" exact />
        <Route component={About} path="/about" />
      </Switch>
    </Router>
  );
};

export default App;
