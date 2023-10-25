import React from 'react';

const Card = ({ character, onSelection }) => (
  <div className="card" onClick={() => onSelection(character)}>
    <img src={character.image} alt="" />
    <p>{character.name}</p>
  </div>
);

const Cards = ({ getRandomChars, onSelection }) => {
  const randomChars = getRandomChars();

  return (
    <div className="cards-container">
      <div>
        {randomChars.map((character, index) => (
          <Card key={index} character={character} onSelection={onSelection} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
