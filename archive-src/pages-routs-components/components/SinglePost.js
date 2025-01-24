import React from 'react';

const SinglePost = ({postInfo}) => {
    return (
        <div className="card p-2" key={postInfo.id}>
            <h5>{postInfo.title}</h5>
            <p>{postInfo.body}</p>
            <p>User Id: {postInfo.userId}</p>
        </div>
    );
};

export default SinglePost;