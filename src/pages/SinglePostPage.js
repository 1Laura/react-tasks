import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import http from "../plugins/https";
import SinglePost from "../components/SinglePost";

const SinglePostPage = () => {
    const {id} = useParams();
    const [userPost, setUserPost] = useState(null);

    useEffect(() => {
        http("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(data => {
                console.log(data)
                setUserPost(data)
            })
    }, []);

    return (
        <div className="container d-flex flex-wrap gap-2">
            {userPost &&
                <SinglePost key={userPost.id} userPostInfo={userPost}/>
            }
        </div>
    );
};

export default SinglePostPage;