import React, { useState } from "react";
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

export { TareaFormulario };
