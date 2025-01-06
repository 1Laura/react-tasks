import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const [array1, setArray1] = useState(["purple", "pink", "coral", "violet"]);
    const [array2, setArray2] = useState([]);

    function colorMoveToBox2(index) {
        console.log(index)
        let array1Copy = [...array1];
        array1Copy = array1Copy.filter((item, i) => i !== index);
        setArray1(array1Copy);

        let array2Copy = [...array2, array1[index]];
        setArray2(array2Copy);
    }

    function colorMoveToBox1(index) {
        let array2Copy = [...array2];
        array2Copy = array2Copy.filter((item, i) => i !== index);
        setArray2(array2Copy);

        let array1Copy = [...array1, array2[index]];
        setArray1(array1Copy);
    }

    return (
        <div className="container">
            <div className="box">
                {array1.map((color1, index1) =>
                    <div key={index1}
                         className="color"
                         style={{backgroundColor: color1}}
                         onClick={() => colorMoveToBox2(index1)}>
                    </div>
                )}
            </div>
            <div className="box">
                {array2.map((color2, index2) =>
                    <div key={index2}
                         className="color"
                         style={{backgroundColor: color2}}
                         onClick={() => colorMoveToBox1(index2)}>
                    </div>
                )}
            </div>

        </div>
    );
}

export default App;
