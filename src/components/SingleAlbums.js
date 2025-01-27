import React from 'react';
import {useNavigate} from "react-router-dom";

const SingleAlbums = ({userAlbumsInfo}) => {
    const navigate = useNavigate();
    return (
        <div className="card flex-wrap p-2 m-2">
            <h5 onClick={() => navigate(`/album/${userAlbumsInfo.id}`)}>{userAlbumsInfo.title}</h5>
        </div>
    );
};

export default SingleAlbums;