import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [num, setNum] = useState(0);
    const [color, setColor] = useState("green");
    useEffect(() => {
        if (num > 30 && num < 50) {
            setColor("yellow");
        }
        if (num > 50 && num < 70) {
            setColor("orange");
        }
        if (num > 70) {
            setColor("red");
        }
    }, [num]);

    return (

        <div className="container">
            <div className="progress">
                <div style={{width: num + "%", backgroundColor: color}}></div>
            </div>
            <h1>Number:{num}</h1>
            <button onClick={() => setNum(num + 5)}>Add num</button>
        </div>


    );

}

export default App;
