import React, {use, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import SinglePost from "../components/SinglePost";


const UserPostsPage = ({username:myName, secret}) => {
    const {username} = useParams();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        fetch("http://167.99.138.67:1111/getuserposts/" + username)
            .then(response => response.json())
            .then(data => {
                // console.log(data.data)
                setUserPosts(data.data)
            })
    }, [])


    return (
        <div className="container d-flex flex-wrap gap-2">
            {userPosts.map((post, index) =>
                <SinglePost key={index} postInfo={post} username={myName} secret={secret}/>
            )}

        </div>
    );
};

export default UserPostsPage;