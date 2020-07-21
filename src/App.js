import React, { Component } from "react";
import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/register";
import "./App.css";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route path="/register" component={Register} />

            <Route path="/home" component={Home} />
            <Route path="/" exact component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
