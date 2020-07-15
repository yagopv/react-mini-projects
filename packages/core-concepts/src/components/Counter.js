import React from "react";

export function CounterManager({ onDecrement, onIncrement }) {
  return (
    <div>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export function CounterInfo({ count }) {
  return <p>{count}</p>;
}
