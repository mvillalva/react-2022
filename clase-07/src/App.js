import logo from './logo.svg';
import mp3 from './audio.mp3';
import mp4 from './video.mp4';
import './App.css';
import Button from './components/Button/Button';
import Audio from './components/Audio/Audio';
import Video from './components/Video/Video';
import List from './components/List/List';
import Input from './components/Input/Input';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'.'+logo} className="App-logo" alt="logo" />        
        <br></br>
        <h1>Componente Button</h1>
        <Button label="Login"/>
        <br></br>
        <h1>Componente Video</h1>
        <Video url={mp4} type="video/mp4"/>
        <br></br>
        <h1>Componente Audio</h1>
        <Audio url={mp3} type="audio/mpeg"/>
        <br></br>
        <h1>Componente List</h1>
        <List items={['Item 1', 'Item 2', 'Item 3', 'Item 4']}/>
        <br></br>
        <Input name="text" type="text" placeholder="Ingrese su nombre" label="Nombre"/>
        <Input name="email" type="email" placeholder="Ingrese su email" label="Email"/>
        <Input name="pass" type="password" placeholder="Ingrese su contraseña" label="Contraseña"/>
      </header>
    </div>
  );
}

export default App;

