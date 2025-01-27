import React from 'react';

const SingleAlbums = ({userAlbumsInfo}) => {
    return (
        <div className="card flex-wrap p-2 m-2">
            <h5>{userAlbumsInfo.title}</h5>
        </div>
    );
};

export default SingleAlbums;