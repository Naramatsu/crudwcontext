import React, { useEffect, useContext } from 'react'
import { AppContext } from '../../context/AppContext';

const Todo = () => {
  // llamamos todos los metodos y variables del contexto que necesitemos
  const { fetchAll, todos } = useContext(AppContext)

  // hacemos el llamado al metodo que lista todos los `todos`
  useEffect(() => {
    // preguntamos si en el estado global tenemos almacenado algo en la variable `todos`
    if (!todos.length) {
      // si esta vacia la variable `todos` hacemos la peticion a la API
      fetchAll()
    }
    // condicionamos al hook `useEffect` a que se modifique solo si `todos` se actualizo
  }, [todos])

  return (
    <section>
      <h3>TODO List</h3>
      <ul>
        {todos.map(({ title, completed }, index) =>
          <li key={index}>
            {/* en este caso aplico readOnly porque no se va a agregar el controlador de cambio de valores */}
            <input type="checkbox" checked={completed} readOnly />
            {title}
          </li>
        )}
      </ul>
    </section>
  )
}

export default Todo