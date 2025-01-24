import React, {useEffect, useState} from 'react';
import SinglePost from "../components/SinglePost";
import {useParams} from "react-router-dom";

const PostPage = ({username: myName, secret}) => {
    const {username, postId} = useParams();
    const [userPost, setUserPost] = useState([]);

    useEffect(() => {
        fetch(`http://167.99.138.67:1111/getsinglepost/${username}/${postId}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setUserPost(data.data)
            })
    }, [])

    return (
        <div className="container d-flex flex-wrap gap-2">
            {userPost &&
                <SinglePost postInfo={userPost} username={myName} secret={secret}/>
            }
        </div>
    );
};

export default PostPage;