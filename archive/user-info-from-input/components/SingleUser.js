import React, {useRef, useState} from 'react';

const SingleUser = ({userInfo}) => {

    return (
        <div className="card">
            <img src={userInfo.image} alt=""/>
            <p>{userInfo.username}</p>
        </div>
    );
};

export default SingleUser;