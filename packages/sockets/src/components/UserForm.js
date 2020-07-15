import React, { useState } from 'react';
export function UserForm({ onUserNameSelected }) {
  const [value, setValue] = useState('');

  return (
    <form>
      <input
        type="text"
        value={value}
        placeholder="Select your user name"
        onChange={e => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          onUserNameSelected(value);
        }}
      >
        Select
      </button>
    </form>
  );
}
