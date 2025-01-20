import React, {useEffect, useState} from 'react';
import SinglePost from "../components/SinglePost";
import {useParams} from "react-router-dom";

const PostPage = () => {
    const params = useParams();
    const [userPost, setUserPost] = useState([]);

    useEffect(() => {
        fetch("http://167.99.138.67:1111/getsinglepost/" + params.username + "/" + params.postId)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUserPost(data.data)
            })
    }, [])

    return (
        <div className="container d-flex flex-wrap gap-2">
            {/*{userPost.map((post, index) =>*/}
                <SinglePost  postInfo={userPost}/>
            {/*)}*/}
        </div>
    );
};

export default PostPage;