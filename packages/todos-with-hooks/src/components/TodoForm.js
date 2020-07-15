import React, { useEffect } from 'react';

function TodoForm({ onAddTodo, inputElement, todo, onInput }) {
  useEffect(() => {
    inputElement.current.focus();
  });

  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={onAddTodo}>
          <input
            placeholder="Task"
            ref={inputElement}
            value={todo.text}
            onChange={onInput}
          />
          <button type="submit"> Add Todo </button>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
