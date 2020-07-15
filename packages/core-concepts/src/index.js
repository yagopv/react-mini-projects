import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Greeting } from './components/Greeting';
import { GreetingWithProps } from './components/GreetingWithProps';
import { Animals } from './components/Animals';
import { CSSStyling } from './components/CSSStyling';

import './css/css-styling.css';
import './css/index.css';

import { InlineStyling } from './components/InlineStyling';
import { CSSModuleStyling } from './components/CSSModuleStyling';
import {
  StarWarsPeople,
  StarWarsPeopleClass
} from './components/StarWarsPeople';
import { CounterInfo, CounterManager } from './components/Counter';
import { ControlledLogin, UncontrolledLogin } from './components/Login';
import { Header } from './components/Header';
import { CounterReducer } from './components/CounterReducer';
import { Picture } from './components/Picture';
import { MouseMove } from './components/MouseMove';

// Con Router
function RoutedApp() {
  const [count, setCount] = useState(0);

  // BrowserRouter - Envuelve la aplicacion y me permite gestionar el enrutado en el cliente (Navegador)
  // Switch - Permite que solo una ruta este activa a la vez si varias matchean el path
  // Route - Permite declarar una ruta
  // Redirect - Redirecciones entre rutas
  // Link - Permite enlazar rutas a traves de un <a />
  return (
    <BrowserRouter>
      <main>
        <Header />
        <section id="content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/jsx" />
            </Route>
            <Route path="/jsx">
              <Greeting />
            </Route>
            <Route path="/props">
              <GreetingWithProps name="Props" />
            </Route>
            <Route path="/state">
              <Animals />
            </Route>
            <Route path="/css-styling">
              <CSSStyling />
            </Route>
            <Route path="/inline-styling">
              <InlineStyling />
            </Route>
            <Route path="/css-modules">
              <CSSModuleStyling />
            </Route>
            <Route path="/fetch-data">
              <StarWarsPeople />
            </Route>
            <Route path="/classes">
              <StarWarsPeopleClass />
            </Route>
            <Route path="/lifting">
              <React.Fragment>
                <CounterInfo count={count} />
                <CounterManager
                  onIncrement={() => setCount(count + 1)}
                  onDecrement={() => setCount(count - 1)}
                />
              </React.Fragment>
            </Route>
            <Route path="/forms">
              <React.Fragment>
                <h2>Controlled Login</h2>
                <ControlledLogin />
                <h2>Uncontrolled Login</h2>
                <UncontrolledLogin />
              </React.Fragment>
            </Route>
            <Route path="/reducer">
              <CounterReducer />
            </Route>
            <Route path="/children">
              <Picture src="http://via.placeholder.com/250x250">
                <p>Hey how you doing ?</p>
              </Picture>
              <MouseMove>
                {coord => (
                  <p>
                    Position is {coord.x} and {coord.y}
                  </p>
                )}
              </MouseMove>
            </Route>
          </Switch>
        </section>
      </main>
    </BrowserRouter>
  );
}

// Sin Router
function App({ examples }) {
  // useState(estadoInicial) devuelve un array:
  // - posicion 1 - estado actual
  // - posicion 2 - funcion para modificarlo (updater)
  // La unica forma de que React vuelva a ejecutar el cuerpo de la funcion - rerender
  // es a traves de una funcion modificador de estado
  // Destructuring de arrays para dar un nombre a esas posiciones
  // https://es.reactjs.org/docs/hooks-state.html
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <main>
      <ul>
        {/* Para hacer bucles uso siempre map con el objetivo de 
        transformar cada elemento del array en un elemento JSX */}
        {/* https://es.reactjs.org/docs/lists-and-keys.html */}
        {/* Puedo gestionar eventos. Mismo nombre que el standar pero en camelCase */}
        {/* Puedo usar arrow para manejar el evento o pasarle una funcion */}
        {/* Para los eventos el primer parametro sera el propio evento */}
        {/* https://es.reactjs.org/docs/handling-events.html */}
        {examples.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <section id="content">
        {selectedIndex === 0 && <Greeting />}
        {selectedIndex === 1 && <GreetingWithProps name="Props" />}
        {selectedIndex === 2 && <Animals />}
        {selectedIndex === 3 && <CSSStyling />}
        {selectedIndex === 4 && <InlineStyling />}
        {selectedIndex === 5 && <CSSModuleStyling />}
        {selectedIndex === 6 && <StarWarsPeople />}
        {selectedIndex === 7 && <StarWarsPeopleClass />}
        {selectedIndex === 8 && (
          <React.Fragment>
            <CounterInfo count={count} />
            <CounterManager
              onIncrement={() => setCount(count + 1)}
              onDecrement={() => setCount(count - 1)}
            />
          </React.Fragment>
        )}
        {selectedIndex === 9 && (
          <React.Fragment>
            <h2>Controlled Login</h2>
            <ControlledLogin />
            <h2>Uncontrolled Login</h2>
            <UncontrolledLogin />
          </React.Fragment>
        )}
      </section>
    </main>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<RoutedApp />, rootElement);
