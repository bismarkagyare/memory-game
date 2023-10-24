import React from 'react';
import getRandomCharacters from '../utils/randomCharacters';

const Cards = () => {
  const characters = getRandomCharacters();

  return (
    <div className="cards-container">
      <div>
        {characters.map((obj, index) => (
          <div key={index}>{obj.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
