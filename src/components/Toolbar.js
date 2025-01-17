import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div>
            <Link to="/" className="p-2">Index page</Link>
            <Link to="/gallery" className="p-2">Gallery page</Link>
            <Link to="/profile" className="p-2">Profile page</Link>

        </div>
    );
};

export default Toolbar;