import React from 'react';

const SinglePhoto = ({photoInfo}) => {

    return (
        <div className="card p-2" key={photoInfo.id}>
            <img src={photoInfo.url} alt=""/>
            <h5>{photoInfo.title}</h5>
            <p>Album Id: {photoInfo.albumId}</p>
            <p>Photo Id: {photoInfo.id}</p>
            <p>{photoInfo.url}</p>
        </div>
    );
};

export default SinglePhoto;