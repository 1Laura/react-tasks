import React from 'react';
import useStore from "../store/main";

const Component2 = () => {
    const {updateUserName,changeName} = useStore((state) => state);
    function update() {
        updateUserName("Seva");
    }

    return (
        <div>
            <h3>Component 2</h3>
            {/*<input type="text" placeholder={"enter name"} ref={nameRef}/>*/}
            <button onClick={update}>Update</button>
            <button onClick={changeName}>Change to default</button>
        </div>
    );
};

export default Component2;