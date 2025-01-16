import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {useEffect, useState} from "react";
import SingleItem from "./components/SingleItem";

function App() {
    const [items, setItems] = useState([]);


    return (
        <div className="container">
            <button onClick={()=>setItems([...items, ""])}>Add items</button>
            <div className="d-flex mt-2 flex-wrap gap-1">
                {items.map((item, index)=>
                <SingleItem key={index} />
                )}

            </div>

        </div>
    );
}

export default App;
