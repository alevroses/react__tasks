/* import React from "react";
import "../stylesheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({
  id, 
  texto,
  completada,
  completarTarea,
  eliminarTarea,
}) {
  return (
    <div
      className={
        completada
          ? "tarea-contenedor completada"
          : "tarea-contenedor"
      }
    >
      <div
        className="tarea-texto"
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}

export { Tarea }; */

import React from "react";
import ReactDOM from "react-dom/client";
import "../stylesheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({
  id,
  text,
  completed,
  completeTask,
  deleteTask,
}) {
  return (
    <div
      className={
        completed
          ? "task-container completed"
          : "task-container"
      }
    >
      <p
        className="task-text"
        onClick={() => completeTask(id)}
      >
        {text}
      </p>
      <AiOutlineCloseCircle
        className="task-icon"
        onClick={() => deleteTask(id)}
      />
    </div>
  );
}

export { Task };
