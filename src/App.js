import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {

    const inputName = useRef();
    const inputAge = useRef();
    const inputCity = useRef();
    const inputEmail = useRef();
    const inputPhone = useRef();

    const [userData, setUserData] = useState({
        userName: "Laura",
        age: 50,
        city: "Vilnius",
        email: "bal@gmail.com",
        phone: "+37060080860"
    })

    function updateUserData() {
        let userDataCopy = {...userData};

        userDataCopy.userName = inputName.current.value;
        console.log(userDataCopy.userName)
        userDataCopy.age = inputAge.current.value;
        userDataCopy.city = inputCity.current.value;
        userDataCopy.email = inputEmail.current.value;
        userDataCopy.phone = inputPhone.current.value;

        setUserData(userDataCopy);
    }


    return (
        <div className="container">
            <div className="card">
                <p>Name: {userData.userName}</p>
                <p>Age: {userData.age}</p>
                <p>City: {userData.city}</p>
                <p>Email: {userData.email}</p>
                <p>Phone: {userData.phone}</p>
            </div>

            <div className="card-input">
                <select name="" id="">
                    <option value="username"></option>
                    
                </select>
                <input type="text" placeholder="Name" ref={inputName}/>
                <input type="text" placeholder="Age" ref={inputAge}/>
                <input type="email" placeholder="City" ref={inputCity}/>
                <input type="password" placeholder="Email" ref={inputEmail}/>
                <input type="password" placeholder="Phone" ref={inputPhone}/>
                <button type="submit" value="Submit" onClick={updateUserData}>Update</button>
            </div>
        </div>
    );
}

export default App;
