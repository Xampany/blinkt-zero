import "bulma/css/bulma.css";
import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Detail from "./components/Detail/Detail";
import GlobalFormatSelect from "./components/FormatSelect/GlobalFormatSelect";
import LedList from "./components/LedList/LedList";

const App: React.FC = () => {
  return (
    <section className="container">
      <header className="box">
        <div className="columns">
          <div className="column">
            <Link to="/">
              <h1 className="title">Pi Blinkt!</h1>
            </Link>
          </div>
          <div className="column">
            <div className="is-pulled-right">
              <GlobalFormatSelect />
            </div>
          </div>
        </div>
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
