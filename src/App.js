import './App.css';
import {useState} from "react";

function App() {

    const [getCounter, setCounter] = useState(0)
    const [perClick, setPerClick] = useState(1)
    const [bgColor, setBgColor] = useState("white")
    const [image, setImage] = useState("https://static.vecteezy.com/system/resources/thumbnails/044/279/881/small/chocolate-chips-on-cookie-on-transparent-background-png.png")

    function addCounter() {
        setCounter(getCounter + perClick)
    }

    function buyUpgrade(upgradeNum, pointsCost) {
        if (getCounter < pointsCost) return
        setCounter(getCounter - pointsCost)

        if (upgradeNum === 1) {
            setPerClick(2)
        }
        if (upgradeNum === 2) {
            setPerClick(5)
        }
        if (upgradeNum === 3) {
            setBgColor("gray")
        }
        if (upgradeNum === 4) {
            setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8D47zJvBKG-h-9SxUXao_FFBJlzi2B4d-Q&s")
        }
    }

    return (

        <div className="d-flex j-center gap20" style={{backgroundColor: bgColor}}>
            <div className="random ">
                <img onClick={addCounter}
                     src={image}
                     alt=""/>
                <h2>Counter: {getCounter}</h2>
            </div>

            <div className="d-flex direction-col">
                <button onClick={() => buyUpgrade(1, 10)}>2 per click (10p)</button>
                <button onClick={() => buyUpgrade(2, 20)}>5 per click (20p)</button>
                <button onClick={() => buyUpgrade(3, 50)}>change bg color (50p)</button>
                <button onClick={() => buyUpgrade(4, 50)}>Change cookie image (50p)</button>
            </div>
        </div>

    );

}

export default App;
