/* import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../stylesheets/TaskForm.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ handleSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSending = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    handleSubmit(newTask);
  };

  return (
    <form
      className="form"
      action=""
      onSubmit={handleSending}
    >
      <textarea
        className="form__textarea"
        id=""
        cols="30"
        rows="1"
        placeholder="Write a new Task..."
        onChange={handleChange}
      ></textarea>
      <button className="button">
        <AiOutlinePlusCircle className="button__icon" />
      </button>
    </form>
  );
}

export { TaskForm }; */

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../stylesheets/TaskForm.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ handleSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSending = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    /* 
      handleSubmit es igual a addTask, función que 
      se le pasó en el componente TasksList. Sabiendo 
      esto addTask necesita un parametro, el cual será
      newTask que es un objeto. 
    */
    handleSubmit(newTask);
  };

  return (
    <form
      className="form"
      action=""
      onSubmit={handleSending}
    >
      <textarea
        className="form__textarea"
        name=""
        id=""
        cols="30"
        rows="1"
        placeholder="Write a new Task..."
        onChange={handleChange}
      ></textarea>
      <button className="button">
        <AiOutlinePlusCircle className="button__icon" />
      </button>
    </form>
  );
}

export { TaskForm };
