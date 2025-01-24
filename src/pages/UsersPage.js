import React, {useEffect, useState} from 'react';
import http from "../plugins/https";
import SingleUser from "../components/SingleUser";


const UsersPage = ({name}) => {

    const [allUsers, setAllUsers] = useState([]);
    //galima sitaip, paliksim nod.js
    // async function getData(){
    //     let data= await http("https://jsonplaceholder.typicode.com/users")
    // }

    useEffect(() => {

        http("https://jsonplaceholder.typicode.com/users")
            .then(data => {
                console.log(data)
                setAllUsers(data)
            })
    }, []);


    return (
        <div className="container d-flex flex-wrap gap-2">
            {allUsers.map(user =>
                <SingleUser key={user.id} userInfo={user}/>
            )}
        </div>
    );
};

export default UsersPage;