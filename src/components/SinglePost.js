import {Link, useLocation, useNavigate} from "react-router-dom";
import button from "bootstrap/js/src/button";
import {useState} from "react";

const SinglePost = ({postInfo, username, secret, removePost}) => {
    const time = new Date(postInfo.timestamp).toLocaleString();
    const navigate = useNavigate();
    const location = useLocation();


    function deletePost() {
        const deletePostInfo = {
            secretKey: secret,
            id: postInfo.id,
        }

        const option = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(deletePostInfo),
        };

        fetch("http://167.99.138.67:1111/deletepost", option)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    if (location.pathname === "/") {

                        removePost(postInfo.id)
                    } else {
                        navigate("/")
                    }
                }
            })
    }


    return (
        <div className="card p-2" key={postInfo.id}>
            <img src={postInfo.image} alt=""/>
            <Link to={`/user/${postInfo.username}/${postInfo.id}/`}><h5>{postInfo.title}, {time}</h5></Link>
            <p>{postInfo.description}</p>
            <Link to={`/user/${postInfo.username}`}>{postInfo.username}</Link>

            {postInfo.username === username &&
                <div>
                    <button className="m-2" onClick={deletePost}>Delete</button>
                </div>
            }
        </div>
    );
};

export default SinglePost;