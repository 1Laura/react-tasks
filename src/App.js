import './App.css';
import {useRef, useState} from "react";

function App() {
    // record part start
    const inputTextRef = useRef("");
    const updateTextRef = useRef("");
    const [recordValueArray, setRecordValueArray] = useState([]);
    const [recordSelected, setRecordSelected] = useState(-1)

    function createRecord() {
        const newRecord = {
            value: inputTextRef.current.value,
            time: new Date().toLocaleTimeString(),
        }
        const recordValueArrayCopy = [...recordValueArray];
        recordValueArrayCopy.push(newRecord);
        setRecordValueArray(recordValueArrayCopy)
        inputTextRef.current.value = "";
    }

    function updateRecord(index) {
        const updateRecord = {
            value: updateTextRef.current.value,
            time: new Date().toLocaleTimeString(),
        }
        // atnaujinu irasa
        const recordValueArrayCopy = [...recordValueArray];
        // perduodu indexa iraso ir jo reiksme
        recordValueArrayCopy[index] = updateRecord;
        setRecordValueArray(recordValueArrayCopy);
        updateTextRef.current.value = "";
    }

    // move box part
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
            <div className="record-container">
                <div className="record-block">
                    {recordValueArray.map((record, index) =>
                        <div className="record-render d-flex" key={index}>
                            <div className="record-render-text-time">
                                <p>{record.value}</p>
                                <p>{record.time}</p>
                            </div>
                            <button onClick={() => setRecordSelected(index)}>Edit</button>
                        </div>
                    )}
                    <div className="record-input d-flex">
                        <input type="text"
                               placeholder="Enter text"
                               ref={inputTextRef}/>
                        <button onClick={createRecord}>Create</button>
                    </div>
                </div>

                {recordSelected >= 0 &&
                    <div className="record-block record-block-edit">
                        <p>{recordValueArray[recordSelected].value}</p>
                        <input type="text" placeholder="Update text"
                               ref={updateTextRef}/>
                        <button onClick={() => updateRecord(recordSelected)}>Update</button>
                    </div>
                }
            </div>

            <hr/>

            <div className="box-move-container">
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
        </div>
    );
}

export default App;
