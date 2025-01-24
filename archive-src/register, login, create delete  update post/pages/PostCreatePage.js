import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const PostCreatePage = ({secret}) => {
    const titleRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    function createPost() {
        const createPostInfo = {
            secretKey: secret,
            title: titleRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value,

        }
        console.log(createPostInfo);

        const option = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(createPostInfo),
        };

        fetch("http://167.99.138.67:1111/createpost", option)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    setError(null);
                    navigate("/");
                } else {
                    setError(data.message)
                }
            })
    }

    return (
        <div>
            <input type="text" placeholder="Enter title" ref={titleRef}/>
            <input type="text" placeholder="Enter image url" ref={imageRef}/>
            <textarea placeholder="Enter description" ref={descriptionRef}/>
            {error && <h6>{error}</h6>}
            <button onClick={createPost}>Create post</button>
        </div>
    );
};

export default PostCreatePage;