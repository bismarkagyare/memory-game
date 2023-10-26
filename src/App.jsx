import { useState } from 'react';
import backgroundImage from './assets/background.png';
import backgroundVideo from './assets/background.mp4';
import { Header, Cards, Scoreboard, Footer } from './components';
import { charArray } from './utils';

const App = () => {
  const [characters, setCharacters] = useState(charArray);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const onSelection = (character) => {
    //check if game should reset : if the selection already exists
    const reset = selected.some(
      (selectedChar) => selectedChar.name === character.name
    );

    setScore(reset ? 0 : score + 1);
    setSelected(reset ? [] : [...selected, character]);
    setCharacters(
      reset ? charArray : [...characters.filter(char.name !== character.name)]
    );

    if (score === highScore && !reset) setHighScore(highScore + 1);
  };

  const getRandomChars = () => {
    const shuffledSelected = [...selected.sort(() => Math.random() - 0.5)];
    const shuffledCharacters = [...characters.sort(() => Math.random() - 0.5)];

    const alternatingArray = [];

    while (alternatingArray.length < 4) {
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
      <Scoreboard score={score} highScore={highScore} />

      <Cards getRandomChars={getRandomChars} onSelection={onSelection} />
      {/* <Cards characters={characters} selected={selected} onSelection={onSelection} /> */}
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
