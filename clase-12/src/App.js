import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ImageList from './components/imageList/ImageList';
import Container from 'react-bootstrap/Container';

function App() {  
  return (
    <Container fluid className="App">
      <h1>Listado de imágenes</h1>
      <ImageList />      
    </Container>
  );
}

export default App;
