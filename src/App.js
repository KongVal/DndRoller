import React, { useState } from 'react';
import './App.css';

const diceFaces = {
  'd4': 4,
  'd6': 6,
  'd8': 8,
  'd10': 10,
  'd12': 12,
  'd20': 20,
  'd100': 100
};

function rollDice(numDice, diceType) {
  const faces = diceFaces[diceType];
  const rolls = Array.from({ length: numDice }, () => Math.floor(Math.random() * faces) + 1);
  return rolls;
}

function App() {
  const [diceType, setDiceType] = useState('d6');
  const [numDice, setNumDice] = useState(1);
  const [rolls, setRolls] = useState([]);

  const handleRoll = () => {
    const newRolls = rollDice(numDice, diceType);
    setRolls(newRolls);
  };

  return (
    <div className="App">
      <h1>Virtual Dice Roller</h1>
      <div>
        <label htmlFor="diceType">Select Dice Type:</label>
        <select id="diceType" value={diceType} onChange={(e) => setDiceType(e.target.value)}>
          {Object.keys(diceFaces).map((dice) => (
            <option key={dice} value={dice}>{dice}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="numDice">Number of Dice:</label>
        <input type="number" id="numDice" value={numDice} onChange={(e) => setNumDice(parseInt(e.target.value))} />
      </div>
      <button onClick={handleRoll}>Roll Dice</button>
      <div>
        {rolls.length > 0 && (
          <p>You rolled: {rolls.join(', ')}</p>
        )}
      </div>
    </div>
  );
}

export default App;
