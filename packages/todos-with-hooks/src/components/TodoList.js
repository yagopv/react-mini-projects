import React from 'react';

function TodoList({ todos, onDeleteTodo }) {
  const createTasks = item => {
    return (
      <li key={item.key} onClick={() => onDeleteTodo(item.key)}>
        {item.text}
      </li>
    );
  };

  return <ul className="theList">{todos.map(createTasks)}</ul>;
}

export default TodoList;
