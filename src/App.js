import logo from './logo.svg';
import './App.css';
import {use, useState} from "react";

function App() {
    const [getCounter, setCounter] = useState(0);

    function addCounter() {
        setCounter(getCounter + 1);
    }

    return (
        <div className="App">
            <div className="card">
                <h2>counter: {getCounter}</h2>
                <button onClick={addCounter}>Add counter</button>
            </div>

        </div>
    )
        ;
}

export default App;
