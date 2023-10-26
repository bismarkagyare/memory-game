import React, { useState, useEffect } from 'react';

// const Card = ({ character, onSelection }) => (
//   <div className="card" onClick={() => onSelection(character)}>
//     <img src={character.image} alt="" />
//     <p>{character.name}</p>
//   </div>
// );

const Cards = ({ getRandomChars, onSelection }) => {
  const [randomChars, setRandomChars] = useState(getRandomChars());
  const [canClick, setCanClick] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    //if its not the first load, then execute code
    if (!firstLoad) {
      setTimeout(() => {
        setRandomChars(getRandomChars());
      }, 1000);
    }
  }, [getRandomChars, firstLoad]);

  const handleClick = (character) => {
    if (!canClick) return;

    setFirstLoad(false);
    setCanClick(false);

    document.querySelectorAll('.card').forEach((element) =>
      element.animate(
        [
          // keyframes
          { transform: 'rotateY(0turn)' },
          { transform: 'rotateY(0.5turn)' },
        ],
        {
          // options
          duration: 1000,
          iterations: 2,
          direction: 'alternate',
        }
      )
    );

    onSelection(character);

    setTimeout(() => {
      setCanClick(true);
    }, 2000);
  };

  return (
    <div className="cards-container">
      <div>
        {randomChars.map((character, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleClick(character)}
          >
            <img src={character.image} alt="" />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
