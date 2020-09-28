import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./Views/Home/Home";
import Shortlisted from "./Views/Shortlisted/Shortlisted";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/shortlist" component={Shortlisted}></Route>
      </Switch>
    </div>
  );
}

export default App;
