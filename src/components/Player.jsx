import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleChange = (event) => {
    console.log(event);
    setPlayerName(event.target.value);
  };

  const handleClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) onChangeName(symbol, playerName);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input onChange={handleChange} type="text" required value={playerName} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "SAVE" : "EDIT"}</button>
    </li>
  );
};

export default Player;
