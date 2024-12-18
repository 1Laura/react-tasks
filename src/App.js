import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [name, setName] = useState("John");
    const [emoji, setEmoji] = useState("😆");
    useEffect(() => {
        if (name === "Brian") {
            setEmoji("😫");
        }
        if (name === "Linda") {
            setEmoji("🤩");
        }
        if (name === "Alice") {
            setEmoji("😡");
        }
        if (name === "Peter") {
            setEmoji("🥴");
        }
        if (name === "Robert") {
            setEmoji("😲");
        }
        if (name === "Isabella") {
            setEmoji("😵");
        }
    }, [name]);

    return (

        <div className="container">
            <div className="card">
                <h3>{name}</h3>
                <p>{emoji}</p>
            </div>
            <button onClick={() => setName("Brian")}>Brian</button>
            <button onClick={() => setName("Linda")}>Linda</button>
            <button onClick={() => setName("Peter")}>Peter</button>
            <button onClick={() => setName("Alice")}>Alice</button>
            <button onClick={() => setName("Robert")}>Robert</button>
        </div>
    );
}

export default App;
