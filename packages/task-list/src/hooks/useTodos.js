import { useEffect, useReducer } from 'react';
import { getTodos, addTodo, removeTodo, updateTodo } from '../http/todos';

const SET_TODOS = 'SET_TODOS';
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

function todosReducer(state, action) {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;
    case ADD_TODO:
      return [action.todo, ...state];
    case COMPLETE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: true };
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

export function useTodos() {
  const [state, dispatch] = useReducer(todosReducer, []);

  useEffect(() => {
    async function fetchTodos() {
      const { data } = await getTodos();

      if (data) {
        dispatch({ type: SET_TODOS, todos: data || [] });
      }
    }

    fetchTodos();
  }, []);

  const handleAddTodo = async todo => {
    const { data } = await addTodo({
      ...todo,
      createdAt: new Date(),
      completed: false
    });
    dispatch({ type: ADD_TODO, todo: data });
  };

  const handleRemoveTodo = async id => {
    await removeTodo(id);
    dispatch({ type: DELETE_TODO, id });
  };

  const handleCompleteTodo = async id => {
    const updatedTodo = state.find(todo => todo.id === id);
    updatedTodo.completed = true;
    await updateTodo(id, updatedTodo);
    dispatch({ type: COMPLETE_TODO, id });
  };

  return {
    todos: state,
    handleAddTodo,
    handleRemoveTodo,
    handleCompleteTodo
  };
}
