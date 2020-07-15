import React, { useState } from 'react';
import { useUsers } from '../context/UsersContext';

const AddUser = () => {
  const [userName, setUserName] = useState('');
  const { addNewUser } = useUsers();

  const handleChange = e => {
    setUserName(e.target.value);
  };

  return (
    <>
      <hr />
      <h3>Add new user:</h3>
      <input
        type="text"
        value={userName}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <button
        className={`add-btn ${!userName ? 'disabled' : ''}`}
        onClick={() => addNewUser(userName)}
        disabled={!userName}
      >
        Add
      </button>
    </>
  );
};

export default AddUser;
