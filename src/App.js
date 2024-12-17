import './App.css';
import {useState} from "react";

function App() {
    const [getEmoji, setEmoji] = useState("👋");


    // 1 variant
    function updateEmoji(emoji) {
        setEmoji(emoji);
    }

    return (

        <div className="container">
            <div className="emoji">{getEmoji}</div>

            <div className="buttons">
                <button onClick={() => {
                    setEmoji("🙂")
                }}>happy
                </button>
                <button onClick={() => {
                    setEmoji("😔")
                }}>sad
                </button>
                <button onClick={() => {
                    setEmoji("😠")
                }}>angry
                </button>
                <button onClick={() => {
                    setEmoji("😯")
                }}>surprised
                </button>
            </div>
        </div>

    )
        ;

}

export default App;
