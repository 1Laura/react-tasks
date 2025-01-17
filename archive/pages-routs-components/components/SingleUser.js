import React from 'react';

const SingleUser = ({userInfo}) => {
    return (
        <div className="card p-2" key={userInfo.id}>
            <h5>{userInfo.name}</h5>
            <p>{userInfo.phone}</p>
            <p>{userInfo.email}</p>
            <p>User Id: {userInfo.id}</p>
        </div>
    );
};

export default SingleUser;