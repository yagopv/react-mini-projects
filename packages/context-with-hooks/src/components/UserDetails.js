import React from 'react';
import { useUsers } from '../context/UsersContext';

const UserDetails = () => {
  //get the selected user from the usersContext
  const { selectedUser } = useUsers();

  return (
    <div>
      <h4>User Details: </h4>
      {selectedUser && selectedUser.name ? (
        <>
          <p>
            Selected User name: <strong>{selectedUser.name}</strong>
          </p>
          <p>
            Selected User id: <strong>{selectedUser.id}</strong>
          </p>
        </>
      ) : (
        <p>Please select a user in the list to see the details.</p>
      )}
    </div>
  );
};

export default UserDetails;
