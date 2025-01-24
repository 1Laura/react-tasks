import React, {useEffect, useState} from 'react';
import SinglePost from "../components/SinglePost";

const IndexPage = ({username, secret}) => {

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetch("http://167.99.138.67:1111/getallposts")
            .then(response => response.json())
            .then(data => {
                setAllPosts(data.data);
            })
    }, []);

    function removePostFromAllPostsArray(id) {
        let allPostsCopy = [...allPosts];
        allPostsCopy = allPostsCopy.filter(post => post.id !== id);
        setAllPosts(allPostsCopy);
    }

    function updatePostFromAllPostsArray(postItem) {
        let allPostsCopy = [...allPosts];
        let postIndex = allPostsCopy.findIndex(post => post.id === postItem.id);
        allPostsCopy[postIndex] = postItem;
        setAllPosts(allPostsCopy);
    }


    return (
        <div className="container d-flex flex-wrap gap-2">
            {allPosts.map(post =>
                <SinglePost key={post.id}
                            postInfo={post}
                            username={username}
                            secret={secret}
                            removePost={removePostFromAllPostsArray}
                            updatePost={updatePostFromAllPostsArray}/>)}
        </div>
    );
};

export default IndexPage;