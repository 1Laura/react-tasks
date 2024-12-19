import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {

    const [data, setData] = useState([
        {
            "text": "Hello",
            "textLength": 5,
        }]);

    const inputText = useRef("");

    function updateData() {
        const inputValue = inputText.current?.value || "";
        if (inputValue.trim() === "") return; // Prevent adding empty inputs
        const newEntry = {
            text: inputValue,
            textLength: inputValue.length,
        };
        setData((prevData) => [...prevData, newEntry]); // Use functional update to avoid direct manipulation
        inputText.current.value = ""; // Clear input after adding
    }


    return (
        <div className="container">

            {data.map((item, index) =>
                <div className="to-do-block" key={index}>
                    <p>{item.text}</p>
                    <p>{item.text.length}</p>
                </div>
            )}

            <div>
                <input type="text" ref={inputText}/>
                <button onClick={updateData}>Update</button>
            </div>
        </div>
    );
}

export default App;
