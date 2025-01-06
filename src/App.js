import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const colors = ["red", "lightblue", "green", "yellow", "pink", "orange"];
    const [colorSelected, setColorSelected] = useState("white")
    const inputName = useRef("");
    const selectGender = useRef();
    const [userNameGenderColor, setUserNameGenderColor] = useState([]);

    function updateNameGenderColor() {
        const newUserNameGenderColor = {
            name: inputName.current.value,
            gender: selectGender.current.value,
            color: colorSelected
        }
        console.log(newUserNameGenderColor);
        const userNameGenderColorCopy = [...userNameGenderColor];
        userNameGenderColorCopy.push(newUserNameGenderColor);
        setUserNameGenderColor(userNameGenderColorCopy);
    }

    const [text, setText] = useState([]);
    const textInput = useRef("");

    function addText() {
        const newTextValue = {
            value: textInput.current.value,
            length: textInput.current.value.length
        };
        const textCopy = [...text];
        textCopy.push(newTextValue);
        setText(textCopy);
        textInput.current.value = "";
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
            <div className="colors-container">
                {userNameGenderColor.map((userInfo, index) =>
                    <div className="render" style={{backgroundColor: userInfo.color}} key={index}>
                        <p><span className="strong">Name: </span>{userInfo.name}</p>
                        <p><span className="strong">Gender: </span>{userInfo.gender}</p>
                    </div>
                )}
                <div className="colors">
                    {colors.map((color, index) =>
                        <div className={`color-block strong ${colorSelected === color && "selected"}`} style={{backgroundColor: color}} key={index} onClick={() => setColorSelected(color)}></div>
                    )}
                </div>
                <div className="select-block">
                    <select ref={selectGender}>
                        <option value="man">Male</option>
                        <option value="women">Female</option>
                    </select>
                    <input type="text" placeholder="Enter name" ref={inputName}/>
                    <button onClick={updateNameGenderColor}>Add</button>
                </div>
            </div>

            <div className="text-length-container">
                {text.map((text, index) =>
                    <div className="text-block" key={index}>
                        <p>Text: {text.value}</p>
                        <p>Text length: {text.length}</p>
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
        </div>
    );
}

export default App;
