import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = ({secret}) => {
    return (
        <div>
            <Link to="/" className="p-2">Home</Link>

            {!secret && <Link to="/register" className="p-2">Register</Link>}
            {!secret && <Link to="/login" className="p-2">Login</Link>}

            {secret && <Link to="/createpost" className="p-2">Create Post</Link>}

        </div>
    );
};

export default Toolbar;