import './App.css';
import {useState} from "react";

function App() {
    const [getColor, setColor] = useState("#308a11");
    const [getProgressWidth, setProgressWidth] = useState(0);

    function updateProgress(num) {
        if (getProgressWidth > 800) {
            return;
        }
        setProgressWidth(getProgressWidth + num);
        if (getProgressWidth > 200 && getProgressWidth < 400) {
            setColor("#f1d218");
        }
        if (getProgressWidth > 400 && getProgressWidth < 600) {
            setColor("#f48a1f");
        }
        if (getProgressWidth > 600) {
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
                    updateProgress(10)
                }}>1 per click
                </button>
                <button onClick={() => {
                    updateProgress(30)
                }}>3 per click
                </button>
            </div>
        </div>

    )
        ;

}

export default App;
