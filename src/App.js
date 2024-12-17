import './App.css';
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const [getRotateCookie, setRotateCookie] = useState(0);

    const rotateCookie = () => {
        setCount(count + 5);
        setRotateCookie(getRotateCookie + 5)
    };

    return (
        <div className="container">
            <h1>🍪 Cookie Counter</h1>
            <div className="cookie" onClick={rotateCookie} style={{transform: `rotate(${getRotateCookie}deg)`}}
            >🍪
            </div>
            <p style={{fontSize: "2em"}}>{count}</p>

        </div>
    );
}

export default App;
