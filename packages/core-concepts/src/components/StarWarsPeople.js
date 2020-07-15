import React, { useState, useEffect } from "react";
import { getStarWarsPeople } from "../http/starWarsApi";
import { Header } from "./Header";

const BASE_URL = "https://swapi.co/api/people";

// EJERCICIO:
// ----------

// A partir de los datos que me devuelve el api de star wars
// intentar mostrar una lista paginada:
//  - 1. Un boton "Cargar mas" que añada los nuevos personajes a las lista que ya tenemos
//  - 2. Una lista de botones que me permitan navegar entre paginas de 10 personajes

export function StarWarsPeople() {
  const [people, setPeople] = useState(null);
  const [url, setUrl] = useState(BASE_URL);

  // useEffect me permite elegir si quiero ejecutar el código
  // que contiene en cada render
  // Parametro 1 -> Función a ejecutar
  // Parametro 2 => Un array con las dependencias cuya modificación obliga a ejecutar
  // de nuevo la función del effect
  //   - Si no le paso el parametro 2 entonces se ejecuta en cada render
  //   - [] -> Solo se ejecuta en el primer render
  //   - [dep1, dep2] -> Se ejecutara cada vez que se modifica dep1 o dep2
  //   - Devuelvo una función -> Se ejecutara dicha funcion
  //     cuando el componente se elimine del DOM (Unmount)
  // RESTRICCION!!: La funcion que le paso al useEffect no puede ser asincrona

  useEffect(() => {
    getStarWarsPeople(url).then(response => {
      setPeople(response.data);
    });
    return () => console.log("Unmount");
  }, [url]);

  // useEffect(() => {
  //   async function getData() {
  //     const { data } = await getStarWarsPeople();
  //     setPeople(data);
  //   }

  //   getData();

  //   return () => console.log("Unmount");
  // }, []);

  if (people === null) {
    return <div>Loading ...</div>;
  }

  return (
    <React.Fragment>
      <Header />
      <h2>Count: {people.count}</h2>
      <ul>
        {people.results.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setUrl(people.previous)}
          disabled={!people.previous}
        >
          Prev
        </button>
        <button onClick={() => setUrl(people.next)} disabled={!people.next}>
          Next
        </button>
      </div>
    </React.Fragment>
  );
}

export class StarWarsPeopleClass extends React.Component {
  // Defino el estado en el constructor
  constructor(props) {
    // Acordarme de llamar al constructor de la clase base con las props
    super(props);

    // Defino el estado
    this.state = {
      people: null,
      url: BASE_URL
    };
  }

  // Equivalente a useEffect con []
  componentDidMount() {
    getStarWarsPeople(this.state.url).then(response => {
      this.setState({ people: response.data });
    });
  }

  // Equivalente a useEffect con dependencias []
  // Recibe las props anteriores y el estado anterior para
  // poder compararlo con this.props y this.state
  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      getStarWarsPeople(this.state.url).then(response => {
        this.setState({ people: response.data });
      });
    }
  }

  // Equivalente a la fn return en useEffect
  componentWillUnmount() {
    console.log("Unmount");
  }

  // Equivalente a lo que devuelve la fn. El JSX
  // Accedere al estado a traves de this.state
  // Accedere a las props a traves de this.props
  render() {
    if (this.state.people === null) {
      return <div>Loading ...</div>;
    }

    return (
      <React.Fragment>
        <h2>Count: {this.state.people.count}</h2>
        <ul>
          {this.state.people.results.map(person => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
        <div>
          <button
            onClick={() => this.setState({ url: this.state.people.previous })}
            disabled={!this.state.people.previous}
          >
            Prev
          </button>
          <button
            onClick={() => this.setState({ url: this.state.people.next })}
            disabled={!this.state.people.next}
          >
            Next
          </button>
        </div>
      </React.Fragment>
    );
  }
}
