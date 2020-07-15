import React from 'react';

import { useUsers } from '../context/UsersContext';

const UsersList = props => {
  const { users, selectedUser, setSelectedUser } = useUsers();

  return (
    <div>
      <h4>Users: </h4>
      {users.map(user => {
        return (
          <div
            className={`user-item ${
              selectedUser && user.id === selectedUser.id
                ? 'user-item-selected'
                : ''
            }`}
            key={user.id}
            onClick={() => setSelectedUser(user)}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
