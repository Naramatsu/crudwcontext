import { GET_TODOS, GET_TODO, UPDATE_TODOS } from "./types"

/*
 * el metodo delete no los incluyo porque son valores que cambian en una API
 * por ende al hacer uso de este se deberia llamar a la accion o endpoint que va a devolver esos cambios
 */

const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload
      };
    case GET_TODO:
    case UPDATE_TODOS:
      return {
        ...state,
        todo: payload
      };
    default:
      return state;
  }
}

export default reducer;