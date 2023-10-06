/* import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/App.css";
import Logo from "./images/freecodecamp-logo.png";
import { TasksList } from "./components/TasksList";

function App() {
  return (
    <>
      <figure className="figure">
        <img
          className="figure__img"
          src={Logo}
          alt="Logo"
        />
      </figure>
      <main className="main">
        <h1 className="main__title">My Tasks</h1>
        <TasksList />
      </main>
    </>
  );
}

export { App }; */

import React from "react";
import ReactDOM from "react-dom/client";
import { Logo } from "./components/Logo";
import { TaskList } from "./components/TasksList";
import "./stylesheets/App.css";

function App() {
  return (
    <>
      <Logo />
      <TaskList />
    </>
  );
}

export { App };
