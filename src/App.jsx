/* import "./stylesheets/App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import { ListaDeTareas } from "./components/TasksList";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo freecodecamp"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export { App }; */

import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/App.css";
import Logo from "./images/freecodecamp-logo.png";
import { TaskForm } from "./components/TaskForm";

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
      <section className="section">
        <h1 className="section__title">My Tasks</h1>
        <TaskForm />
      </section>
    </>
  );
}

export { App };
