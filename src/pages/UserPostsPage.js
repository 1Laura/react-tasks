import React, {useEffect, useState} from 'react';
import http from "../plugins/https";
import {useParams} from "react-router-dom";
import SinglePost from "../components/SinglePost";

const UserPostsPage = () => {
    const {id} = useParams();
    const [userAllPosts, setUserAllPosts] = useState([]);

    useEffect(() => {
        http("https://jsonplaceholder.typicode.com/posts?userId=" + id)
            .then(data => {
                console.log(data)
                setUserAllPosts(data)
            })
    }, []);

    return (
        <div className="container d-flex flex-wrap gap-2">
            {userAllPosts.map(post =>
                <SinglePost key={post.id} userPostInfo={post}/>
            )}
        </div>
    );
};

export default UserPostsPage;