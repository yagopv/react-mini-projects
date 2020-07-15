import React, { useState } from 'react';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';

function getMenuOption(option) {
  switch (option) {
    case 0:
      return <UseState />;
    case 1:
      return <UseEffect />;
    default:
      return;
  }
}

function App() {
  const [menuOption, setMenuOption] = useState(0);

  return (
    <div className="app">
      <ul className="menu-options">
        <li onClick={() => setMenuOption(0)}>useState</li>
        <li onClick={() => setMenuOption(1)}>useEffect</li>
      </ul>
      {getMenuOption(menuOption)}
    </div>
  );
}

export default App;
