import React from 'react';
import {useParams} from "react-router-dom";
import useUserStore from "../store/main";

const SinglePostPage = () => {
    const {postId} = useParams();
    const {posts} = useUserStore();
    const post = posts.find(post => post.id === postId);

    return (
        <div className="container">
            <img src={post.imageUrl} alt=""/>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
        </div>
    );
};

export default SinglePostPage;