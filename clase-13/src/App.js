import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { themes } from './context/MainContext';

function App() {
  const [theme, setTheme] = useState(themes.light)

  return (
    <div className="App">
      <Navbar state={{theme: theme, setTheme: setTheme}}/>
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
