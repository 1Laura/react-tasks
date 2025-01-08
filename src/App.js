import './App.css';
import {useState} from "react";

function App() {
    const decorationSlots = [{top: 0, left: 211, dec: ""}, {top: 155, left: 95, dec: ""}, {top: 240, left: 60, dec: ""}, {top: 355, left: 30, dec: ""}, {top: 475, left: 0, dec: ""}, {top: 155, left: 330, dec: ""}, {top: 240, left: 370, dec: ""}, {top: 355, left: 400, dec: ""}, {top: 475, left: 430, dec: ""}];
    const lightSlots = [
        {top: 60, left: 220},   // First row
        {top: 90, left: 190}, {top: 90, left: 240},   // Second row
        {top: 130, left: 200}, {top: 130, left: 280},  // Third row
        {top: 170, left: 160}, {top: 170, left: 240}, {top: 170, left: 305},  // Fourth row
        {top: 210, left: 150}, {top: 210, left: 220}, {top: 210, left: 300},  // Fifth row
        {top: 250, left: 120}, {top: 250, left: 200}, {top: 250, left: 280}, {top: 250, left: 345},  // Sixth row
        {top: 300, left: 180}, {top: 300, left: 260}, {top: 300, left: 330},   // Seventh row
        {top: 350, left: 120}, {top: 350, left: 200}, {top: 350, left: 280}, {top: 350, left: 360},   // Eighth row
        {top: 400, left: 140}, {top: 400, left: 220}, {top: 400, left: 300}, {top: 400, left: 380},  // Ninth row
        {top: 450, left: 80}, {top: 450, left: 160}, {top: 450, left: 240}, {top: 450, left: 320}, {top: 450, left: 400},  // Tenth row
        {top: 500, left: 100}, {top: 500, left: 200}, {top: 500, left: 280}, {top: 500, left: 360},  // Eleventh row
        {top: 550, left: 120}, {top: 550, left: 240}, {top: 550, left: 360},  // Twelfth row
    ];

    const decorationsArray = ["🔔", "🎁", "🧩", "🍬", "⭐", "💟", "💝", "❄️", "🌟", "🍪", "🕯️"]

    const [selectedDecorationSlot, setSelectedDecorationSlot] = useState([]);

    const [selectedLightSlot, setSelectedLightSlot] = useState(null);


    function choseDecorationSlot(index) {
        setSelectedDecorationSlot(index);
        console.log(selectedDecorationSlot);
    }

    function updateDecorationSlotOnTree(index) {
        console.log(index);
    }


    return (
        <div className="container">
            <div className="christmas-tree-container">
                <div className="lights-block">
                    <h3>Lights</h3>
                    <div className="light-box" style={{backgroundColor: "yellow"}}></div>
                    <div className="light-box" style={{backgroundColor: "red"}}></div>
                    <div className="light-box" style={{backgroundColor: "orange"}}></div>
                    <div className="light-box" style={{backgroundColor: "lightblue"}}></div>
                </div>
                <div className="christmas-tree-block">
                    <img src="https://i.pinimg.com/736x/b7/5c/98/b75c98c86763fcfa48f1be8fac301587.jpg" alt=""/>

                    {decorationSlots.map((slot, index) =>
                        <div key={index}
                             className="decoration-slot"
                             style={{top: `${slot.top}px`, left: `${slot.left}px`}}
                             onClick={() => choseDecorationSlot(index)}>
                            {decorationsArray[selectedDecorationSlot]}
                        </div>
                    )}

                    {lightSlots.map((slot, index) =>
                        <div key={index}
                             className="light-slot"
                             style={{top: `${slot.top}px`, left: `${slot.left}px`}}
                             onClick={() => setSelectedLightSlot(index)}>
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
