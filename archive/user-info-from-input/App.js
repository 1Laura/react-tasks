import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {use, useRef, useState} from "react";
import SingleUser from "./components/SingleUser";

function App() {
    const [img, setImg] = useState("");
    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);

    const newUser = {
        image: img,
        username: name
    }

    return (
        <div className="container">
            <input type="text" placeholder="enter image url" value={img} onChange={(event) => setImg(event.target.value)}/>
            <input type="text" placeholder="enter username" value={name} onChange={(event) => setName(event.target.value)}/>
            <button onClick={() => setUsers([...users, newUser])}>Add user</button>


            <div className="d-flex mt-2 flex-wrap gap-1">
                {users.map((user, index) =>
                    <SingleUser key={index} userInfo={user}/>
                )}
            </div>
        </div>
    );
}

export default App;
