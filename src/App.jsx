import backgroundImage from './assets/background.png';
import backgroundVideo from './assets/background.mp4';

const App = () => {
  return (
    <div className="app">
      <div>Test</div>
      <video id="background-vid" autoPlay loop poster={backgroundImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default App;
