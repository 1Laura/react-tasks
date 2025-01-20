import React, {useEffect, useState} from 'react';
import SinglePost from "../components/SinglePost";

const IndexPage = () => {

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetch("http://167.99.138.67:1111/getallposts")
            .then(response => response.json())
            .then(data => {
                setAllPosts(data.data);
                // console.log(data.data)
            })
    }, []);


    return (
        <div className="container d-flex flex-wrap gap-2">
            {allPosts.map((post, index)=>
                <SinglePost key={index} postInfo={post}/>
            )}

        </div>
    );
};

export default IndexPage;