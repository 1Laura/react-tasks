import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import useUserStore from "../store/main";

const Toolbar = () => {
    const {currentUser, logUser, logoutUser} = useUserStore();
    const navigate = useNavigate();

    return (
        <div className="container-fluid">
            <div className="m-3">
                <Link to="/" className="p-2">Login</Link>
                <Link to="/register" className="p-2">Register</Link>
                {currentUser && logUser && <Link to="/profile" className="p-2">Profile</Link>}
                {currentUser && logUser && <Link to="/userslist" className="p-2">Users list</Link>}
                {currentUser && logUser && <Link to="/createpost" className="p-2">Create post</Link>}
                {currentUser && logUser && <button onClick={() => logoutUser(navigate)}>Logout</button>}
            </div>
        </div>
    );
};

export default Toolbar;