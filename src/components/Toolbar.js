import React from 'react';
import {Link} from "react-router-dom";
const Toolbar = () => {

    return (
        <div className={"container-fluid"}>
            <Link to="/" className="p-2">Login</Link>
            <Link to="/register" className="p-2">Register</Link>
            <Link to="/profile" className="p-2">Profile</Link>

        </div>
    );
};

export default Toolbar;