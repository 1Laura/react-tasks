import './App.css';
import {useState} from "react";

function App() {
    const [getEmoji, setEmoji] = useState("👋");
    const [getProgressWidth, setProgressWidth] = useState(0);

    function updateEmoji(emoji) {
        setEmoji(emoji);
    }

    return (

        <div className="container">
            <div className="emoji">{getEmoji}</div>

            <div className="buttons">

                <button onClick={() => {
                    updateEmoji("🙂")
                }}>happy
                </button>
                <button onClick={() => {
                    updateEmoji("😔")
                }}>sad
                </button>
                <button onClick={() => {
                    updateEmoji("😠")
                }}>angry
                </button>
                <button onClick={() => {
                    updateEmoji("😯")
                }}>surprised
                </button>
            </div>
        </div>

    )
        ;

}

export default App;
