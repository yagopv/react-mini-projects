import React, { useState } from 'react';

function Players({ onPlayersChanged }) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  return (
    <input
      id="players"
      type="text"
      placeholder={`Enter player ${count + 1}`}
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyPress={e => {
        if (e.target.value.length > 2 && e.key === 'Enter') {
          onPlayersChanged(e.target.value);
          setCount(count + 1);
          setValue('');
        }
      }}
    />
  );
}

export { Players };
