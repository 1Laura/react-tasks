import React from 'react';
import {Link} from "react-router-dom";
import useUserStore from "../store/main";

const Toolbar = () => {
    const {currentUser} = useUserStore();

    return (
        <div className={"container-fluid"}>
            <Link to="/" className="p-2">Login</Link>
            <Link to="/register" className="p-2">Register</Link>
            {currentUser && <Link to="/profile" className="p-2">Profile</Link>}
            {currentUser && <Link to="/userslist" className="p-2">Users list</Link>}

        </div>
    );
};

export default Toolbar;