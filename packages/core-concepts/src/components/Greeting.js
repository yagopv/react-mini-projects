import React from "react";

// Los componentes son simples funciones
// Siempre empiezan con mayusculas
export function Greeting() {
  const name = "JSX";

  // Devolver JSX (HTML)
  // Tambien puedo devolver null -> En este caso no se mostrara nada
  // Puedo utilizar cualquier tah HTML
  // Siempre que quiera utilizar JS en medio del JSX tendre que
  // usar { cualquierExpresion }
  // https://es.reactjs.org/docs/introducing-jsx.html
  return <p>{name}</p>;
}
