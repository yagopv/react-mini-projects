import React, { useState, useEffect } from 'react';
import { Square } from './Square';
import { calculateWinner } from '../lib/utils';
import { Status } from './Status';
import { addGame } from '../http/tickTackToeService';

export function Board({
  player1,
  player2,
  onShowScoreBoardChange,
  onPlayersChanged
}) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isPlayer1Playing, setIsPlayer1Playing] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = i => {
    const sqCopy = [...squares];

    // Si ya ha sido pulsado o ya hay ganador
    if (sqCopy[i] || calculateWinner(squares)) {
      return;
    }

    // Quien esta jugando? X o Y
    sqCopy[i] = isPlayer1Playing ? 'X' : 'O';

    // Cambiar estado
    setSquares(sqCopy);
    setIsPlayer1Playing(!isPlayer1Playing);
  };

  useEffect(() => {
    const w = calculateWinner(squares);

    if (w === 'X') {
      setWinner(player1);
    }
    if (w === 'O') {
      setWinner(player2);
    }
    if (w) {
      addGame({
        player1,
        player2,
        winner: w === 'X' ? player1 : player2,
        type: w
      }).then(() => {
        onShowScoreBoardChange(true);
      });
    }
  }, [squares, player1, player2, onShowScoreBoardChange]);

  return (
    <React.Fragment>
      <Status
        rounds={squares.filter(s => s !== null).length}
        winner={winner}
        next={isPlayer1Playing ? `${player1} (X)` : `${player2} (O)`}
      />
      <div className="grid">
        {squares.map((square, i) => {
          return (
            <Square
              key={i}
              value={square}
              onChangeSquare={() => handleClick(i)}
            />
          );
        })}
      </div>
      <div className="buttons">
        <button
          className="btn"
          onClick={() => {
            setSquares(Array(9).fill(null));
            setIsPlayer1Playing(true);
            setWinner(null);
            onShowScoreBoardChange(false);
          }}
        >
          Reset
        </button>
        <button
          className="btn"
          onClick={() => {
            onPlayersChanged([]);
          }}
        >
          Enter Players
        </button>
      </div>
    </React.Fragment>
  );
}
