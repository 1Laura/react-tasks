import React, {useEffect, useState} from 'react';
import SinglePost from "../components/SinglePost";

const IndexPage = () => {

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAllUsers(data);
            })
    }, []);


    return (
        <div className="container d-flex flex-wrap gap-2">
            {allUsers.map(user =>
                <SinglePost userInfo={user}/>
            )}
        </div>
    );
};

export default IndexPage;