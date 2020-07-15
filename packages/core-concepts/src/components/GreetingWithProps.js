import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";

// Props es el primer argumento de la funcion que representa un componente
// Puedo hacer destructuring
// https://es.reactjs.org/docs/components-and-props.html
export function GreetingWithProps({ name }) {
  // Puedo acceder a la prop para mostrar datos a traves de { }
  return (
    <div>
      <p>{name}</p>
      <Link to="/jsx">Go to /jsx</Link>
    </div>
  );
}
