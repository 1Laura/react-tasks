import './App.css';
import {useState} from "react";

function App() {
    const [getColor, setColor] = useState("#308a11");
    const [getProgressWidth, setProgressWidth] = useState(0);

    function updateProgress10() {
        if (getProgressWidth > 800) {
            return;
        }
        setProgressWidth(getProgressWidth + 10);
        if (getProgressWidth > 200) {
            setColor("#f1d218");
        }
        if (getProgressWidth > 400) {
            setColor("#f48a1f");
        }
        if (getProgressWidth > 600) {
            setColor("#f41f1f");
        }
    }

    function updateProgress30() {
        if (getProgressWidth > 800) {
            return;
        }
        setProgressWidth(getProgressWidth + 30);
        if (getProgressWidth > 200) {
            setColor("#f1d218");
        }
        if (getProgressWidth > 400) {
            setColor("#f48a1f");
        }
        if (getProgressWidth > 600) {
            setColor("#f41f1f");
        }
        if (getProgressWidth >= 800) {
            setColor("#f41f1f");
        }

    }

    return (

        <div className="container">
            <div className="progress-bar">
                <div className="progress" style={{backgroundColor: getColor, width: getProgressWidth}}></div>
            </div>

            <div className="buttons">
                <button onClick={() => {
                    updateProgress10()
                }}>1 per click
                </button>
                <button onClick={() => {
                    updateProgress30()
                }}>3 per click
                </button>
            </div>
        </div>

    )
        ;

}

export default App;
