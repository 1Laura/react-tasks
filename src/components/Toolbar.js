import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = ({secret}) => {
    return (
        <div>
            <Link to="/" className="p-2">Home</Link>
        </div>
    );
};

export default Toolbar;