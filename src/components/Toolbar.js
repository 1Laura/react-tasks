import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className="m-4">
            <Link to="/" className="p-2">Home</Link>
        </div>
    );
};

export default Toolbar;