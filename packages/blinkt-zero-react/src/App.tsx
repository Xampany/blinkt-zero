import React from "react";
import "./App.css";
import LedList from "./components/LedList/LedList";
import "bulma/css/bulma.css";

const App: React.FC = () => {
  return (
    <section className="container">
      <header className="box">
        <h1 className="title">
          Pi Blinkt!
        </h1>
      </header>
      <LedList />
    </section>
  );
};

export default App;
