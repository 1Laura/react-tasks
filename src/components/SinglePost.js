import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";

const SinglePost = ({postInfo}) => {
    const time = new Date(postInfo.timestamp).toLocaleString();

    return (
        <div className="card p-2" key={postInfo.id}>
            <img src={postInfo.image} alt=""/>
            <h5>{postInfo.title}, {time}</h5>
            <p>{postInfo.description}</p>
            <Link to={`/user/${postInfo.username}`}>{postInfo.username}</Link>
            {/*<p onClick={() => openUserPost(postInfo.username)} <Link to={`/user/${username}`} /> ><strong className="user-name">{postInfo.username}</strong></p>*/}
        </div>
    );
};

export default SinglePost;