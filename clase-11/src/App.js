import "./App.css";
import Image from "./Image/Image";

const images = [
    {   index: 1,
        src: "https://picsum.photos/id/1/300/200"
    }, 
    {   index: 2,
        src: "https://picsum.photos/id/10/300/200"
    },
    {   index: 3,
        src: "https://picsum.photos/id/21/300/200", 
    },
    {   index: 4,
        src: "https://picsum.photos/id/30/300/200", 
    },
    {   index: 5,
        src: "https://picsum.photos/id/41/300/200", 
    },
    {   index: 6,
        src: "https://picsum.photos/id/50/300/200",
    },
    {   index: 7,
        src: "https://picsum.photos/id/61/300/200", 
    },
    {   index: 8,
        src: "https://picsum.photos/id/70/300/200", 
    },
    {   index: 9,
        src: "https://picsum.photos/id/81/300/200", 
    },
    {   index: 10,
        src: "https://picsum.photos/id/90/300/200", 
    },
    {   index: 11,
        src: "https://picsum.photos/id/101/300/200", 
    },
    {   index: 12,
        src: "https://picsum.photos/id/110/300/200"
    }
];

function App() {    
    const imageList = images.filter(src => {
        if (src.index % 1 == 0)
            return src

    }).map(e => <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"><Image src={e.src} label={e.index}/></div>);

    return (
        <div className="App">
            <h1>Lista de Imágenes</h1>
            <div className="row w-100 text-center">
                {imageList}
            </div>
        </div>
    );
}

export default App;
