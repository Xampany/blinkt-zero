import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import LedList from "./components/LedList/LedList";
import "bulma/css/bulma.css";

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
          <LedList />
        </Route>
      </Switch>
    </section>
  );
};

export default App;
