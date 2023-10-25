import React from 'react';

const Scoreboard = ({ score, highScore }) => {
  return (
    <div className="scoreboard-container">
      <p>Score: {score}</p>
      <p>HighScore: {highScore}</p>
    </div>
  );
};

export default Scoreboard;
