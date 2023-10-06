/* import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../stylesheets/TasksList.css";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";

function TasksList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();

      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <>
      <TaskForm handleSubmit={addTask} />
      <section className="tasks-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </section>
    </>
  );
}

export { TasksList }; */

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../stylesheets/TasksList.css";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();

      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id != id
    );

    setTasks(updatedTasks);
  };

  return (
    <main className="main">
      <h1 className="main__title">My Tasks</h1>
      {/* 
        handleSubmit es un prop que se va a comportar
        como una función en su lugar de orígen. Por lo
        tanto se le debe pasar una función. 
      */}
      <TaskForm handleSubmit={addTask} />
      <section className="tasks-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </section>
    </main>
  );
}

export { TaskList };
