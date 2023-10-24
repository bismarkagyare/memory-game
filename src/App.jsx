import backgroundImage from './assets/background.png';
import backgroundVideo from './assets/background.mp4';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';

const App = () => {
  return (
    <div className="app">
      <h1>One Piece Memory Game</h1>

      <Cards />

      <Scoreboard />

      <video id="background-vid" autoPlay loop poster={backgroundImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default App;
