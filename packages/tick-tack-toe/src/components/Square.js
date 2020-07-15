import React from 'react';

export function Square({ value, onChangeSquare }) {
  return (
    <button className="square" onClick={onChangeSquare} data-testid="square">
      {value}
    </button>
  );
}
