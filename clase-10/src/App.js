import logo from './logo.svg';
import './App.css';
import {Image} from './components/image/Image';
import {Sound} from './components/sound/Sound';
import {Video} from './components/video/Video';

import img from './assets/img/logo.png';
import aud from './assets/sound/audio.mp3'
import vid from './assets/video/video.mp4'

function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <Image src={img} width={60} />
        <br />
        <Sound src={aud} type='audio/mpeg' />
        <br />
        <Video src={vid} type='video/mp4' />
        <br />
      </header>
    </div>
  );
}

export default App;
