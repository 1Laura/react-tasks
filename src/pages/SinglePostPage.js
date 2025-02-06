import React, {useRef} from 'react';
import {useParams} from "react-router-dom";
import useUserStore from "../store/main";

const SinglePostPage = () => {
    const {postId} = useParams();

    const {posts, addComment, currentUser, likePost} = useUserStore();

    const commentRef = useRef();

    const post = posts.find(post => post.id === postId);

    function createPostComment() {
        const newComment = commentRef.current.value.trim();
        if (newComment) {
            addComment(postId, currentUser.username, newComment);
            commentRef.current.value = "";
        }
    }

    function likeUserPost() {
        likePost(postId, currentUser.username);
        console.log("sdsfasfd")
    }

    return (
        <div className="container">
            <div>
                <img src={post.imageUrl} alt=""/>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <button onClick={likeUserPost} disabled={post.likedBy.includes(currentUser?.username)}>Like {post.likes}</button>
            </div>
            <div>
                <h5>Comments:</h5>
                {post.comments && post.comments.length > 0 ? (
                    post.comments.map((comment, index) =>
                        <p key={index}><strong>{comment.user}: </strong>{comment.text}</p>
                    )) : (
                    <p>No comments yet.</p>
                )}

            </div>
            <div>
                <h5>Write Comments:</h5>
                <input type="text" placeholder="Enter your comment" ref={commentRef}/>
                <button onClick={createPostComment}>Create comment</button>
            </div>
        </div>
    );
};

export default SinglePostPage;