import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

const SinglePost = ({postInfo}) => {
    const params = useParams();
    console.log(params.username)

    const time = new Date(postInfo.timestamp).toLocaleString();

    useEffect(() => {
        fetch("http://167.99.138.67:1111/getuserposts/" + params.username)
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
            })
    }, [])

    function openUserPost(name) {
        console.log(name)
    }

    return (
        <div className="card p-2" key={postInfo.id}>
            <img src={postInfo.image} alt=""/>
            <h5>{postInfo.title}, {time}</h5>
            <p>{postInfo.description}</p>
            <p onClick={() => openUserPost(postInfo.username)}><strong className="user-name">{postInfo.username}</strong></p>
        </div>
    );
};

export default SinglePost;