import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Image from './components/image/Image';
import Sound from './components/sound/Sound';
import Video from './components/video/Video';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <Image />
        <br />
        <Sound />
        <br />
        <Video />        
        <br />
      </header>
    </div>
  );
}

export default App;
