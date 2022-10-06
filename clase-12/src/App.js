import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ImageList from './components/imageList/ImageList';

function App() {  
  return (
    <div className="App container-fluid">
      <h1>Listado de imágenes</h1>
      <ImageList />      
    </div>
  );
}

export default App;
