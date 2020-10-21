import React from "react";
import "./App.css";
import Header from "./Header";
import Login from "./Login"
import Checkout from "./Checkout";

import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
        <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
