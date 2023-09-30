/* import React, { useState } from "react";
import "../stylesheets/TaskForm.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const TareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(TareaNueva);
  };

  return (
    <form
      className="tarea-formulario"
      action=""
      onSubmit={manejarEnvio}
    >
      <input
        className="tarea-input"
        type="text"
        placeholder="Ingresa una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  );
}

export { TareaFormulario }; */

import React from "react";
import ReactDOM from "react-dom/client";
import "../stylesheets/TaskForm.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

function TaskForm() {
  return (
    <form className="form" action="">
      <textarea
        className="form__textarea"
        name=""
        id=""
        cols="10"
        rows="1" /* XD */
        placeholder="Write a new Task..."
      ></textarea>
      <button className="button">
        <AiOutlinePlusCircle className="button__icon" />
      </button>
    </form>
  );
}

export { TaskForm };
