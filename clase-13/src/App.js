import './App.css';
import Navbar from './components/navbar/Navbar';
import ThemeProvider from './context/ThemeContext';

function App() {
  
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <header className="App-header" >

        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
