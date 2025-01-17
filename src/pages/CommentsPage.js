import React, {useEffect, useState} from 'react';
import SingleComment from "../components/SingleComment";

const CommentsPage = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => {
                setComments(data);
                console.log(comments)
            })
    }, []);


    return (
        <div>
           <SingleComment/>
        </div>
    );
};

export default CommentsPage;