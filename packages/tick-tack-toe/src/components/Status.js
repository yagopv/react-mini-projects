import React from 'react';

export function Status({ rounds, winner, next }) {
  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    if (rounds === 9) {
      status = 'Tie ';
    } else {
      status = 'Next player: ' + next;
    }
  }

  return (
    <div data-testid="status" className="status">
      {status}
    </div>
  );
}
