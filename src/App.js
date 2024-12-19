import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const inputName = useRef();
    const inputEmail = useRef();
    const inputPass = useRef();
    const inputPassRepeat = useRef();

    const [color, setColor] = useState("");


    function validateInputFields() {
        if (inputName.current.value.length > 4 && inputName.current.value.length < 10) {
            setColor("#A2FF8DFF");
            console.log("Name is valid");
        } else {
            setColor("#ff5e5e");
            console.log("Name is not valid");
        }

        if (/\S+@\S+\.\S+/.test(inputEmail.current.value)) {
            setColor("#A2FF8DFF");
            console.log("Email is valid");
        } else {
            setColor("#ff5e5e");
            console.log("Email is not valid");
        }


        if (inputPass.current.value.length > 4 && inputName.current.value.length < 10) {
            setColor("#A2FF8DFF");
            console.log("pass is valid");
        } else {
            setColor("#ff5e5e");
            console.log("pass is not valid");
        }

        if (inputPassRepeat.current.value === inputPass.current.value) {
            setColor("#A2FF8DFF");
            console.log("pass is matching");
        } else {
            setColor("#ff5e5e");
            console.log("Pass is not matching");
        }
    }

    return (
        <div className="container">
            <div className="card">
                <input type="text" id="username" placeholder="User name" ref={inputName} style={{backgroundColor: color}}/>
                <input type="email" placeholder="User email" ref={inputEmail} style={{backgroundColor: color}}/>
                <input type="password" placeholder="User pass" ref={inputPass} style={{backgroundColor: color}}/>
                <input type="password" placeholder="Repeat pass" ref={inputPassRepeat} style={{backgroundColor: color}}/>
                <button type="submit" value="Submit" onClick={validateInputFields}>Submit</button>
            </div>
        </div>
    );
}

export default App;
