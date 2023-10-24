import { useState } from 'react';
import backgroundImage from './assets/background.png';
import backgroundVideo from './assets/background.mp4';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';
import getRandomCharacters from './utils/randomCharacters';

const App = () => {
  const [selected, setSelected] = useState([]);

  const characters = getRandomCharacters();

  const onSelection = (obj) => (e) => {
    e.preventDefault();

    //if the selection already exists
    if (selected.some((object) => object.name === obj.name)) {
      return setSelected([]);
    }

    setSelected([...selected, obj]);
  };

  return (
    <div className="app">
      <h1>One Piece Memory Game</h1>

      <Cards characters={characters} onSelection={onSelection} />

      <Scoreboard />

      <video id="background-vid" autoPlay loop poster={backgroundImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default App;
