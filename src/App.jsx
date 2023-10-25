import { useState } from 'react';
import backgroundImage from './assets/background.png';
import backgroundVideo from './assets/background.mp4';
import { Header, Cards, Scoreboard, Footer } from './components';
import charArray from './utils/charArray';

const App = () => {
  const [characters, setCharacters] = useState(charArray);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const onSelection = (character) => (e) => {
    e.preventDefault();

    //if the selection already exists
    if (selected.some((selectedChar) => selectedChar.name === character.name)) {
      //reset the score board
      setScore(0);
      //clear the selected characters array
      setSelected([]);
      //reset characters to initial state
      setCharacters(charArray);
      //do nothing
      return;
    }

    setScore(score + 1);
    setSelected([...selected, character]);
    setCharacters([
      ...characters.filter((char) => char.name !== character.name),
    ]);

    if (score === highScore) setHighScore(highScore + 1);
  };

  const getRandomChars = () => {
    const shuffledSelected = [...selected.sort(() => Math.random() - 0.5)];
    const shuffledCharacters = [...characters.sort(() => Math.random() - 0.5)];

    const alternatingArray = [];

    while (alternatingArray.length < 8) {
      if (shuffledSelected.length)
        alternatingArray.push(shuffledSelected.pop());
      if (shuffledCharacters.length)
        alternatingArray.push(shuffledCharacters.pop());
    }

    return alternatingArray.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="app">
      <Header />
      <Cards getRandomChars={getRandomChars} onSelection={onSelection} />

      <Scoreboard score={score} highScore={highScore} />

      <Footer />

      <video
        id="background-vid"
        autoPlay
        loop
        muted
        playsInline
        poster={backgroundImage}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default App;
