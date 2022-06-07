import React, { useReducer } from 'react';
// importamos el contexto que creamos
import { AppContext } from './AppContext';
// importamos los reducers que controlan los eventos relacionados a los llamados al API
import TodoReducer from './reducer';
// llamamos a los metodos que realizan las peticiones al API
import { fetchTodo, fetchTodos, updateTodo, deleteTodo } from '../api/todo'

const AppState = props => {
  // creamos un stado (global) inicial
  const initialState = {
    todos: []
  };

  // utilizamos el hook `usereducer` de react para manejar los eventos atravez de la app
  const [globalState, dispatch] = useReducer(TodoReducer, initialState);

  // Evento relacionado con buscar todos los `todos` fetchTodos
  const fetchAll = async () => {
    const response = await fetchTodos();
    dispatch({
      type: "GET_TODOS",
      payload: response
    })
  }

  // Evento relacionado con buscar un solo `todo` por id fetchTodo
  const fetchOne = async (id) => {
    const response = await fetchTodo(id);
    dispatch({
      type: "GET_TODO",
      payload: response
    })
  }

  // Evento relacionado con actualizar un solo `todo` por id updateTodo
  const updateOne = async (id) => {
    const response = await updateTodo(id);
    dispatch({
      type: "UPDATE_TODO",
      payload: response
    })
  }

  // Evento relacionado con eliminar un solo `todo` por id deleteTodo
  const deleteOne = async (id) => {
    const response = await deleteTodo(id);
    dispatch({
      type: "DELETE_TODO",
      payload: response
    })
  }

  // reunimos todas esas funciones para despues enviarlas
  const combineFunctions = {
    fetchAll,
    fetchOne,
    updateOne,
    deleteOne
  }

  return (
    <AppContext.Provider value={{ ...globalState, ...combineFunctions }} >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState;