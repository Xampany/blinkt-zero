import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import LedList from "./components/LedList/LedList";
import "bulma/css/bulma.css";
import Detail from "./components/Detail/Detail";

const App: React.FC = () => {
  return (
    <section className="container">
      <header className="box">
        <Link to="/">
          <h1 className="title">Pi Blinkt!</h1>
        </Link>
      </header>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/leds"></Redirect>
        </Route>
        <Route path="/leds" exact>
          <Dashboard>
            <LedList />
          </Dashboard>
        </Route>
        <Route path="/leds/:index">
          <Detail />
        </Route>
      </Switch>
    </section>
  );
};

export default App;
