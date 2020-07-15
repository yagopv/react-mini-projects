import React, { useState } from "react";

const animals = ["cerdo", "elefante", "ornitorrinco", "murcielago", "montero"];

export function Animals() {
  const [index, setIndex] = useState(
    Math.floor(Math.random() * animals.length)
  );

  function changeAnimal() {
    setIndex(Math.floor(Math.random() * animals.length));
  }

  return <h1 onClick={changeAnimal}>{animals[index]}</h1>;
}
