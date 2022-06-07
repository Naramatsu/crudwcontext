import React from 'react'
import Todo from './components/Todo/Todo';
import AppState from './context/AppState'

const App = () => {

  return (
    <AppState>
      <div className="App">
        <h1>Crud for Nandito</h1>
        <Todo />
      </div>
    </AppState>
  );
}

export default App;
