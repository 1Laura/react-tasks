import React, {useEffect, useState} from 'react';
import SinglePost from "../components/SinglePost";

const PostsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                console.log(data)
            })
    }, []);

    return (
        <div className="container d-flex flex-wrap gap-2">
            {posts.map((post, index) =>
                <SinglePost key={index} postInfo={post}/>
            )}
        </div>
    );
};

export default PostsPage;