
// async - await porque no es muy grande la app
const urlBase = 'https://jsonplaceholder.typicode.com/todos'

// buscar todos
export const fetchTodos = async () => {
  const response = await fetch(urlBase);
  return await response.json();
}

// buscar uno solo
export const fetchTodo = async id => {
  const response = await fetch(`${urlBase}/${id}`);
  return await response.json();
}

// actualizar
export const updateTodo = async (id, params) => {
  const response = await fetch(`${urlBase}/${id}`, {
    method: 'PATCH',
    body: {
      ...params
    }
  });
  return await response.json();
}

// eliminar
export const deleteTodo = async id => {
  const response = await fetch(`${urlBase}/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
}
