import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { ThemeContextProvider, themes } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState(themes.light)

    const toogleTheme = () => 
        theme === themes.dark? 
        setTheme(themes.light) :
        setTheme(themes.dark)

  return (
    <ThemeContextProvider>
      <div className="App">
        <Navbar toogleTheme={toogleTheme} style={theme} />
        <header className="App-header" style={theme}>

        </header>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
