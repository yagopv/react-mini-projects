import React from "react";

// Defino estilos inline a través de objetos JS
// - Los valores deben ir entre '' si son strings
// - Debo pasarlos a camelCase
const styles = {
  container: {
    border: "2px solid #ccc",
    padding: "2rem",
    backgroundColor: "#aaa"
  },
  text: {
    color: "yellow"
  }
};

export function InlineStyling() {
  return (
    <div style={styles.container}>
      <p style={styles.text}>This is a component styled with inline styles</p>
    </div>
  );
}
