import React from 'react';

const Card = ({ character, onSelection }) => (
  <div className="card" onClick={() => onSelection(character)}>
    {character.name}
  </div>
);

const Cards = ({ characters, onSelection }) => (
  <div className="cards-container">
    <div>
      {characters.map((character, index) => (
        <Card key={index} character={character} onSelection={onSelection} />
      ))}
    </div>
  </div>
);

export default Cards;
