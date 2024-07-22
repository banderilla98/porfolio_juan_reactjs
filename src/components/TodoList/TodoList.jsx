import React from "react";
import { TodoApp } from "./TodoAdd.jsx";
import { TodoItem } from "./TodoItem.jsx";

export const TodoList = () => {
  return (
    <>
      {/* Espaceador */}
      <hr />

      <ul>
        <TodoItem/>
      </ul>

      {/* Espaceador */}
      <hr />

      <div className="card-to-do">
        <h1>Lista de tareas</h1>
        <div className="counter-todos">
          <h3>N* de Tareas: 4</h3>
          <h3>Pendientes: 2</h3>
        </div>

        <div className="add-todo">
          <h3>Agregar Tarea: </h3>
          <TodoApp />
        </div>
      </div>
    </>
  );
};
