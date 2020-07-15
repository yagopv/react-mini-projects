import React, { useState } from 'react';

import './index.css';
import { Board } from './components/Board';
import { Scoreboard } from './components/Scoreboard';
import { Players } from './components/Players';

export default function Game() {
  const [players, setPlayers] = useState([]);
  const [showScoreboard, setShowScoreboard] = useState(false);

  return (
    <div className="game">
      {players.length < 2 && (
        <Players
          onPlayersChanged={player => setPlayers(players.concat(player))}
        />
      )}
      {players.length === 2 && (
        <Board
          player1={players[0]}
          player2={players[1]}
          onShowScoreBoardChange={setShowScoreboard}
          onPlayersChanged={player => setPlayers([])}
        />
      )}
      {showScoreboard && (
        <Scoreboard onShowScoreBoardChange={setShowScoreboard} />
      )}
    </div>
  );
}
