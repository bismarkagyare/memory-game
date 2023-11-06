import React, { useState, useEffect } from 'react';
import { wantedArray, getRandomChars } from '../utils';
import sound from '../assets/soundEffects/card-flip.mp3';
// const Card = ({ character, onSelection }) => (
//   <div className="card" onClick={() => onSelection(character)}>
//     <img src={character.image} alt="" />
//     <p>{character.name}</p>
//   </div>
// );

const Cards = ({ characters, selected, onSelection, canPlayAudio }) => {
  const [randomChars, setRandomChars] = useState([]);
  const [cardBacks, setCardBacks] = useState([]);
  const [canClick, setCanClick] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  const audioClip = new Audio(sound);

  const playAudioOnUserInteraction = () => {
    if (canPlayAudio && !firstLoad) {
      audioClip.play();
      document.removeEventListener('click', playAudioOnUserInteraction);
    }
  };

  useEffect(() => {
    setTimeout(
      () => {
        setRandomChars(getRandomChars(selected, characters));
        document.addEventListener('click', playAudioOnUserInteraction);
        setFirstLoad(false);
      },
      //delay only added if randomChars has elements
      randomChars.length ? 1000 : 0
    );

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', playAudioOnUserInteraction);
    };
  }, [characters, selected]);

  // Effect hook to set cardBacks when randomChars change
  useEffect(() => {
    setCardBacks(
      wantedArray
        .map((module) => module.default)
        .sort(() => Math.random() - 0.5)
    );
  }, [randomChars]);

  const handleClick = (character) => {
    if (!canClick) return;

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
    audioClip.play();

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
            style={{ '--bg-image': `url(${cardBacks[index]})` }}
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
