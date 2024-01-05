import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing(true);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleSaveClick() {
    setIsEditing((editing) => !editing);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && (
          <div>
            <span className="player-name">{playerName}</span>
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditClick}>Edit</button>
          </div>
        )}
        {isEditing && (
          <div>
            <input className="player-name" type="text" required value={playerName} onChange={handleChange} />
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleSaveClick}>Save</button>
          </div>
        )}
      </span>
    </li>
  );
}
