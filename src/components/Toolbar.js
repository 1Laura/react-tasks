import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div>
            <Link to="/" className="p-2">Posts page</Link>
            {/*<Link to="/posts" className="p-2">posts page</Link>*/}
            <Link to="/gallery" className="p-2">gallery page</Link>
            <Link to="/users" className="p-2">users page</Link>
            <Link to="/comments" className="p-2">comments page</Link>

        </div>
    );
};

export default Toolbar;