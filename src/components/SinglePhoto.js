import React from 'react';

const SinglePhoto = ({userPhotoInfo}) => {

    return (
        <div className="flex-wrap p-2 m-2">
            <p>{userPhotoInfo.title}</p>
            <img src={userPhotoInfo.url} alt=""/>
        </div>
    );
};

export default SinglePhoto;