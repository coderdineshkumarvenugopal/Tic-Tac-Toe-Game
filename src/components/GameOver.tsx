import React from "react";

const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>GAME OVER!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a Draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
