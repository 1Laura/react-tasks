import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const data = [
        {
            city: "New York",
            population: 8419600,
            profit: 12500000,
            size: 468.9 // in square miles
        },
        {
            city: "Tokyo",
            population: 13929286,
            profit: 17800000,
            size: 622.99 // in square miles
        },
        {
            city: "Paris",
            population: 2161000,
            profit: 8900000,
            size: 40.7 // in square miles
        },
        {
            city: "Mumbai",
            population: 12478447,
            profit: 10300000,
            size: 233.0 // in square miles
        },
        {
            city: "Sydney",
            population: 5312163,
            profit: 5600000,
            size: 12368 // in square miles
        }
    ];
    const [getColor, setColor] = useState("white");

    function changeColor(color) {
        setColor(color);
    }

    return (
        <div className="App">
            <div className="card" style={{backgroundColor: getColor}}>
                <p>{Object.keys(data[0])[0]}: {data[0].city}</p>
                <p>{Object.keys(data[0])[1]}: {data[0].population}</p>
                <p>{Object.keys(data[0])[2]}: {data[0].profit}</p>
                <p>{Object.keys(data[0])[3]}: {data[0].size}</p>
                <button onClick={() => changeColor("red")}>Change color</button>
                <button onClick={() => changeColor("blue")}>Change color</button>
                <button onClick={() => setColor("yellow")}>Change color</button>
            </div>
            <div className="card">
                <p>{Object.keys(data[1])[0]}: {data[1].city}</p>
                <p>{Object.keys(data[1])[1]}: {data[1].population}:</p>
                <p>{Object.keys(data[1])[2]}: {data[1].profit}:</p>
                <p>{Object.keys(data[1])[3]}: {data[1].size}:</p>
            </div>
            <div className="card">
                <p>{Object.keys(data[2])[0]}: {data[2].city}</p>
                <p>{Object.keys(data[2])[1]}: {data[2].population}</p>
                <p>{Object.keys(data[2])[2]}: {data[2].profit}</p>
                <p>{Object.keys(data[2])[3]}: {data[2].size}</p>
            </div>
            <div className="card">
                <p>{Object.keys(data[3])[0]}: {data[3].city}</p>
                <p>{Object.keys(data[3])[1]}: {data[3].population}</p>
                <p>{Object.keys(data[3])[2]}: {data[3].profit}</p>
                <p>{Object.keys(data[3])[3]}: {data[3].size}</p>
            </div>
            <div className="card">
                < p> {Object.keys(data[4])[0]}: {data[3].city}</p>
                <p>{Object.keys(data[4])[1]}: {data[3].population}</p>
                <p>{Object.keys(data[4])[2]}: {data[3].profit}</p>
                <p>{Object.keys(data[4])[3]}: {data[3].size}</p>
            </div>
        </div>
    )
        ;
}

export default App;
