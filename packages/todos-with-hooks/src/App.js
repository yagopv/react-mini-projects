import React, { useState, useRef, useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.todo];
    case 'DELETE':
      return state.filter(item => {
        return item.key !== action.key;
      });
    default:
      return state;
  }
}

function App() {
  const inputElement = useRef(null);
  const [state, dispatch] = useReducer(todosReducer, []);
  // const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    text: '',
    key: ''
  });

  const handleInput = e => {
    const itemText = e.target.value;
    setTodo({ text: itemText, key: Date.now() });
  };

  const addTodo = e => {
    e.preventDefault();
    const newTodo = todo;
    if (newTodo.text !== '') {
      dispatch({ type: 'ADD', todo: todo });
      // setTodos([...todos, newTodo]);
      setTodo({ text: '', key: '' });
    }
  };

  const deleteTodo = key => {
    dispatch({ type: 'DELETE', key });
    // setTodos(
    //   todos.filter(todo => {
    //     return todo.key !== key;
    //   })
    // );
  };

  return (
    <div className="App">
      <TodoForm
        onAddTodo={addTodo}
        inputElement={inputElement}
        onInput={handleInput}
        todo={todo}
      />
      <TodoList todos={state} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
