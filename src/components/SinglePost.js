import {Link, useLocation, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import React, {useEffect, useRef, useState} from "react";

const SinglePost = ({postInfo, username, secret, removePost, updatePost}) => {
    const time = new Date(postInfo.timestamp).toLocaleString();
    const navigate = useNavigate();
    const location = useLocation();
    const [modal, setModal] = useState(false)
    const [error, setError] = useState(null);

    const titleRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();

    const handleClose = () => setModal(false);
    const handleShow = () => setModal(true);

    useEffect(() => {
        if (modal) {
            titleRef.current.value = postInfo.title;
            imageRef.current.value = postInfo.image;
            descriptionRef.current.value = postInfo.description;
        }
    }, [modal]);

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

    function updateUserPost() {
        const updatePostInfo = {
            secretKey: secret,
            title: titleRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value,
            id: postInfo.id,
        }

        const option = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatePostInfo),
        };

        fetch("http://167.99.138.67:1111/updatepost", option)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    delete updatePostInfo.secretKey;
                    updatePostInfo.username = postInfo.username;
                    updatePostInfo.timestamp = postInfo.timestamp;
                    updatePost(updatePostInfo)
                    setError(null);
                    handleClose()
                } else {
                    setError(data.message)
                }
            })
    }


    return (
        <div className="card p-2" key={postInfo.id}>
            <img src={postInfo.image} alt=""/>
            <Link to={`/user/${postInfo.username}/${postInfo.id}/`}><h5>{postInfo.title}</h5></Link>
            <p>{time}</p>
            <p>{postInfo.description}</p>
            <Link to={`/user/${postInfo.username}`}>{postInfo.username}</Link>

            {postInfo.username === username &&
                <div>
                    <Button className="m-2" onClick={deletePost}>Delete</Button>
                    <Button className="m-2" onClick={handleShow}>Update</Button>
                </div>
            }

            {modal &&
                <Modal show={modal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" placeholder="Enter title" ref={titleRef}/>
                        <input type="text" placeholder="Enter image url" ref={imageRef}/>
                        <textarea placeholder="Enter description" ref={descriptionRef}/>
                        {error && <h6>{error}</h6>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={updateUserPost}>
                            Update Post
                        </Button>
                    </Modal.Footer>
                </Modal>
            }

        </div>
    );
};

export default SinglePost;