import React from 'react'
import { TodoApp } from './TodoApp/TodoApp'

export const TodoList = () => {


    


  return (
    <>
    <div className='card-to-do'>
        <h1>Lista de tareas</h1>
        <div className='counter-todos'>
            <h3>N* de Tareas: 4</h3>
            <h3>Pendientes: 2</h3>
        </div>

        <div className='add-todo'>
            <h3>Agregar Tarea: </h3>
            <TodoApp/>
        </div>
    </div>
    </>
  )
}
