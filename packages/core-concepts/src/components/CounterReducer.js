import React, { useReducer } from "react";

// Funcion pura = No hacer llamadas de red nunca
// La funcion reductora recibe dos parametros
//  - El primero representara el estado en el que nos encontramos
//  - El segundo, la accion, es un objeto que tiene
//    al menos una propiedad llamada type
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

export function CounterReducer() {
  // useReducer
  // - function reducer
  // - estado inicial
  // Devuelve un array con dos posiciones.
  //  - La primera el estado actual
  //  - La segunda una funcion para modificar dicho estado
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
    </div>
  );
}
