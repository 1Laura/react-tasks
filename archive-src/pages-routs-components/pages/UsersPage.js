import React, {useEffect, useState} from 'react';
import SingleUser from "../components/SingleUser";

const UsersPage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                console.log(data)
            })
    }, []);


    return (
        <div className="container d-flex flex-wrap gap-2">
            {users.map((user, index) =>
                <SingleUser key={index} userInfo={user}/>
            )}
        </div>
    );
};

export default UsersPage;