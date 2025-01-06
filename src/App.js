import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const colors = ["red", "blue", "green", "yellow", "pink", "orange"];
    const inputName = useRef("");

    const [text, setText] = useState([
        {
            "text": "Hi",
            "textLength": 2,
        }
    ]);
    const textInput = useRef("");

    function addText() {
        const newText = textInput.current.value;
        const newTextLength = newText.length;
        console.log(newText, newTextLength);
        setText([...text, {text: newText, textLength: newTextLength}]);
    }

    const inpRef = useRef();
    const selectRef = useRef();
    const [user, setUser] = useState({
        username: "John",
        age: 25,
        city: "New York"
    });

    function changeUser() {
        const keyName = selectRef.current.value;
        const newValue = inpRef.current.value;

        const userCopy = {...user};
        userCopy[keyName] = newValue;
        console.log(userCopy);
        setUser(userCopy);

    }

    return (
        <div className="container ">
            <div className="text-length-container">

                {text.map((text, index) =>
                    <div className="text-block" key={index}>
                        <p>Text: {text.text}</p>
                        <p>Text length: {text.textLength}</p>
                    </div>
                )}
                <div className="input-block">
                    <input type="text" placeholder="enter word" ref={textInput}/>
                    <button onClick={addText}>Add text</button>
                </div>
            </div>

            <div className="select-container">
                <div>
                    <h3>Change user data</h3>
                    <p>Username: {user.username}</p>
                    <p>Age: {user.age}</p>
                    <p>City: {user.city}</p>
                </div>
                <div className="select-block">
                    <select name="" id="" ref={selectRef}>
                        <option value="username">username</option>
                        <option value="age">age</option>
                        <option value="city">city</option>
                    </select>
                    <input type="text" ref={inpRef} placeholder="new value"/>
                    <button onClick={changeUser}>Change username</button>
                </div>
            </div>

            <div className="colors">
                {colors.map((color, index) =>
                    <div className="color-block" style={{backgroundColor: color}} key={index}>{color}</div>
                )}
                <select>
                    <option value=""></option>
                </select>
                <input type="text" placeholder="Name" ref={inputName}/>

                <button>Add</button>
            </div>
        </div>
    );
}

export default App;
