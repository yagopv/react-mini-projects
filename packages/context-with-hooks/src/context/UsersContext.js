import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext({});

export const UsersContextProvider = props => {
  // Initial values are obtained from the props
  const {
    users: initialUsers,
    selectedUser: initialSelectedUsers,
    children
  } = props;

  // Use State to keep the values
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(initialSelectedUsers);

  const addNewUser = userName => {
    const newUser = { id: new Date().getTime().toString(), name: userName };
    setUsers(users.concat([newUser]));
  };

  // Make the context object:
  const usersContext = {
    users,
    setUsers,
    selectedUser,
    setSelectedUser,
    addNewUser
  };

  // pass the value in provider and return
  return (
    <UserContext.Provider value={usersContext}>{children}</UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  return context;
};
