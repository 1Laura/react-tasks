import React from 'react';
import useStore from "../store/main";

const Component1 = () => {
    const {username, age} = useStore((state) => state);

    return (
        <div>
            <h3>Component 1</h3>
            <h5>{username}</h5>
            <h5>{age}</h5>
        </div>
    );
};

export default Component1;