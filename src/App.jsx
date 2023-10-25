import { useState } from 'react';
import backgroundImage from './assets/background.png';
import backgroundVideo from './assets/background.mp4';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';
import getRandomCharacters from './utils/randomCharacters';

const App = () => {
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const characters = getRandomCharacters();

  const onSelection = (character) => (e) => {
    e.preventDefault();

    //if the selection already exists
    if (selected.some((selectedChar) => selectedChar.name === character.name)) {
      //reset the score board
      setScore(0);
      //clear the selected characters array
      setSelected([]);
      //do nothing
      return;
    }

    setScore(score + 1);
    setSelected([...selected, character]);

    if (score === highScore) setHighScore(highScore + 1);
  };

  return (
    <div className="app">
      <h1>One Piece Memory Game</h1>

      <Cards characters={characters} onSelection={onSelection} />

      <Scoreboard score={score} highScore={highScore} />

      <video id="background-vid" autoPlay loop poster={backgroundImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default App;
