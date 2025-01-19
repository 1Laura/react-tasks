import React, {use, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import SinglePost from "../components/SinglePost";


const UserPage = () => {
    const params = useParams();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        fetch("http://167.99.138.67:1111/getuserposts/" + params.username)
            .then(response => response.json())
            .then(data => {
                setUserPosts(data.data)
            })
    }, [])


    return (
        <div className="container d-flex flex-wrap gap-2">
            {userPosts.map((post, index) =>
                <SinglePost key={index} postInfo={post}/>
            )}

        </div>
    );
};

export default UserPage;