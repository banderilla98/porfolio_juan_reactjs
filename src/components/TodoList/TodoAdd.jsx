import React from 'react'

export const TodoApp = () => {
  return (
    <form>
        <input type="text" 
        className='input-add' 
        name='description' 
        value="Aprender javascript" 
        placeholder='que gustas hacer?' />

        <button className='btn-add' type='submit'>Agregar</button>
    </form>
  )
}
