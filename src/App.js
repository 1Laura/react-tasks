import './App.css';
import {useState} from "react";

function App() {
    const [selected, setSelected] = useState(0);


    return (

        <div className="container">
            <div className={`circle ${selected === 1 ? "selected" : ""}`} onClick={() => setSelected(1)}>
            </div>
            <div className={`circle ${selected === 2 ? "selected" : ""}`} onClick={() => setSelected(2)}>
            </div>
            <div className={`circle ${selected === 3 ? "selected" : ""}`} onClick={() => setSelected(3)}>
            </div>
            <div className={`circle ${selected === 4 ? "selected" : ""}`} onClick={() => setSelected(4)}>
            </div>
        </div>


    );

}

export default App;
