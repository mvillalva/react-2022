import logo from "./logo.svg";
import "./App.css";
import Movies from "./movies/Movies";

const myData = [
    { framework: "Bootstrap" }, 
    { framework: "Material" }, 
    { framework: "Tailwind" }, 
    { framework: "Next" }
];

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

function App() {
    const filterResult = words.filter(word => word.length > 6);
    const myDataList = myData.map((e) => <h2>{e.framework}</h2>);

    return (
        <div className="App">
            {myDataList}
            <Movies data={filterResult} />
        </div>
    );
}

export default App;
