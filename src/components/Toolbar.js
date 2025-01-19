import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div>
            <Link to="/" className="p-2">Index page</Link>
            <Link to="/user" className="p-2">users page</Link>
        </div>
    );
};

export default Toolbar;