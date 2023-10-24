import React from 'react';

const Cards = ({ characters, onSelection }) => {
  return (
    <div className="cards-container">
      <div>
        {characters.map((obj, index) => (
          <div key={index} className="card" onClick={() => onSelection(obj)}>
            {obj.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
