import React from 'react';
import {useNavigate} from "react-router-dom";

const SinglePost = ({userPostInfo}) => {
    const navigate = useNavigate();

    return (
        <div className="card flex-wrap p-2 m-2">
            <h5 style={{cursor: "pointer"}} onClick={() => navigate(`/post/${userPostInfo.id}`)}>{userPostInfo.title}</h5>
            <p>{userPostInfo.body}</p>
        </div>
    );
};

export default SinglePost;