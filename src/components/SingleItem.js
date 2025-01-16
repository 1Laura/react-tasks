import React, {useRef, useState} from 'react';

const SingleItem = () => {
    const colorRef = useRef();
    const [color, setColor] = useState("white");

    function changeColor() {
        setColor(colorRef.current.value);
    }

    return (
        <div className="card" style={{backgroundColor:color}}>
            <input type="color" ref={colorRef} onChange={changeColor}/>
        </div>
    );
};

export default SingleItem;