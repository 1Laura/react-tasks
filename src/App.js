import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const inputSender = useRef(null);
    const inputLetterContent = useRef(null);
    const [lettersList, setLettersList] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState(-1);

    useEffect(() => {
        console.log("listas po setinimo", lettersList);
        // return () => {
        //     console.log("I am being cleaned up");
        // };
    }, [lettersList]);

    function addLetterInfoToLettersList() {
        const newLetterInfo = {
            sender: inputSender.current.value,
            letterContent: inputLetterContent.current.value,
            time: new Date().toLocaleTimeString(),
        }
        setLettersList([...lettersList, newLetterInfo]);
        inputSender.current.value = "";
        inputLetterContent.current.value = "";

    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-4 write-letter">
                    <input type="text" placeholder="Sender" ref={inputSender}/>
                    <input type="text" placeholder="Enter letter" ref={inputLetterContent}/><br/>
                    <button onClick={addLetterInfoToLettersList}>Send</button>

                </div>
                <div className="col-1 border progress-bar"></div>
                <div className="col-3 letters-list">

                    {lettersList.map((letter, index) =>
                        <div className="letter-list flex-column" key={index} onClick={()=>setSelectedLetter(index)}>
                            <p>From: {letter.sender}</p>
                            <p>Time: {letter.time}</p>
                        </div>
                    )}

                </div>
                <div className="col-4">
                    {selectedLetter >= 0 && (
                        <div className="one-letter">
                            <p>From: {lettersList[selectedLetter].sender}</p>
                            <p>{lettersList[selectedLetter].letterContent}</p>
                            <button>Mark as seen</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
