import './App.css';
import {useState} from "react";

function App() {
    const decorationsArray = ["🔔", "🎁", "🍬", "⭐", "❄️", "🌟"]
    const [lightSlots, setLightSlots] = useState([
        {top: 60, left: 220, color: ""},
        {top: 90, left: 190, color: ""}, {top: 90, left: 240, color: ""},
        {top: 130, left: 200, color: ""}, {top: 130, left: 280, color: ""},
        {top: 170, left: 160, color: ""}, {top: 170, left: 240, color: ""}, {top: 170, left: 305, color: ""},
        {top: 210, left: 150, color: ""}, {top: 210, left: 220, color: ""}, {top: 210, left: 300, color: ""},
        {top: 250, left: 120, color: ""}, {top: 250, left: 200, color: ""}, {top: 250, left: 280, color: ""}, {top: 250, left: 345, color: ""},
        {top: 300, left: 180, color: ""}, {top: 300, left: 260, color: ""}, {top: 300, left: 330, color: ""},
        {top: 350, left: 120, color: ""}, {top: 350, left: 200, color: ""}, {top: 350, left: 280, color: ""}, {top: 350, left: 360, color: ""},
        {top: 400, left: 140, color: ""}, {top: 400, left: 220, color: ""}, {top: 400, left: 300, color: ""}, {top: 400, left: 380, color: ""},
        {top: 450, left: 80, color: ""}, {top: 450, left: 160, color: ""}, {top: 450, left: 240, color: ""}, {top: 450, left: 320, color: ""}, {top: 450, left: 400, color: ""},
        {top: 500, left: 100, color: ""}, {top: 500, left: 200, color: ""}, {top: 500, left: 280, color: ""}, {top: 500, left: 360, color: ""},
        {top: 550, left: 120, color: ""}, {top: 550, left: 240, color: ""}, {top: 550, left: 360, color: ""},
    ]);
    const [slots, setSlots] = useState([
        {top: 0, left: 211, dec: ""},
        {top: 155, left: 95, dec: ""},
        {top: 240, left: 60, dec: ""},
        {top: 355, left: 30, dec: ""},
        {top: 475, left: 0, dec: ""},
        {top: 155, left: 330, dec: ""},
        {top: 240, left: 370, dec: ""},
        {top: 355, left: 400, dec: ""},
        {top: 475, left: 430, dec: ""}]);
    const colorsArray = ["yellow", "red", "orange", "lightblue"];

    const [chosenSlot, setChosenSlot] = useState(null);
    const [chosenDecoration, setChosenDecoration] = useState("");


    function updateDecorationSlotOnTree(decorationIndex) {
        setChosenDecoration(decorationsArray[decorationIndex]);
        if (chosenSlot === null) {
            alert("Please select a slot on the tree first!");
            return;
        }
        const slotsCopy = [...slots];
        slotsCopy[chosenSlot].dec = decorationsArray[decorationIndex];
        // console.log("kopija", slotsCopy[decorationIndex].dec);
        setSlots(slotsCopy);
    }

    function turnOnLights(color) {
        console.log(color)
        const lightSlotsCopy = [...lightSlots];

        lightSlotsCopy.forEach(item => {
            item.color = color;
        })
        setLightSlots(lightSlotsCopy);
    }

    return (
        <div className="container">
            <div className="christmas-tree-container">
                <div className="lights-block">
                    <h3>Lights</h3>

                    {colorsArray.map((color, index) =>
                        <div key={index}
                             className="light-box" style={{backgroundColor: color}}
                             onClick={() => turnOnLights(color)}>
                        </div>
                    )}

                </div>
                <div className="christmas-tree-block">
                    <img src="https://i.pinimg.com/736x/b7/5c/98/b75c98c86763fcfa48f1be8fac301587.jpg" alt="christmas tree"/>

                    {slots.map((slot, index) =>
                        <div key={index}
                             className="decoration-slot"
                             style={{top: `${slot.top}px`, left: `${slot.left}px`, border: chosenSlot === index ? "2px solid red" : "2px solid green",}}
                             onClick={() => setChosenSlot(index)}>
                            {slot.dec}
                        </div>
                    )}

                    {lightSlots.map((slot, index) =>
                        <div key={index}
                             className="light-slot"
                             style={{top: `${slot.top}px`, left: `${slot.left}px`, backgroundColor: slot.color}}>
                        </div>
                    )}

                </div>
                <div className="decoration-block">
                    <h3>Decorations</h3>
                    {decorationsArray.map((decoration, index) =>
                        <div key={index}
                             className="decoration-box"
                             onClick={() => updateDecorationSlotOnTree(index)}>
                            {decoration}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
