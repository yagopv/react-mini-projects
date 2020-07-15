import React from 'react';
import { UsersContextProvider } from './context/UsersContext';
import UsersList from './components/UsersList';
import UserDeails from './components/UserDetails';
import AddUser from './components/AddUser';

function App() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Joanna' }
  ];

  return (
    <div className="app">
      <UsersContextProvider users={users}>
        <h2>Usando Context con hooks</h2>
        <p>
          'UsersList', 'UserDetails' y 'AddUser' son componentes que usan el
          mismo contexto "UsersContext"
        </p>
        <div className="users-container">
          <UsersList />
          <UserDeails />
        </div>
        <AddUser />
      </UsersContextProvider>
    </div>
  );
}

export default App;
