import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movies from './movies/Movies';
import Contador from './Contador';
import ImageList from './Image/ImageList';

const myData = [
  {Framework : 'Bootstrap'},
  {Framework : 'Material'},
  {Framework : 'tailwind'},
  {Framework : 'Next'},
]

function App() {

  const myDataList = myData.map( e => e.Framework)

  return (
    <div className="App">
      <h1>Listado de imágenes</h1>
      <ImageList />
      {/* <Contador />
      <br />
      <Movies data={myDataList}>
        <h1>Hello world!</h1>
        <small>Hola</small>
      </Movies> */}
    </div>
  );
}

export default App;
