import React, {use, useEffect, useState} from 'react';
import http from "../plugins/https";
import SingleUser from "../components/SingleUser";
import {Link, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";

const SingleUserPage = () => {

    const {id} = useParams();

    const [user, setUser] = useState(null);

    useEffect(() => {

        http("https://jsonplaceholder.typicode.com/users/" + id)
            .then(data => {
                console.log(data)
                setUser(data)
            })
    }, []);

    return (
        <div>
            {user ?
                <div className="row align-items-center justify-content-center">
                    <div className="col-4">
                        <SingleUser userInfo={user}/>
                    </div>
                    <div className="col-4">

                        <Link to={`/posts/${user.id}`}><Button className="user-posts m-2 w-50">User posts</Button></Link>
                        <Link to={`/albums/${user.id}`}><Button className="user-albums m-2 w-50">user albums</Button></Link>
                        <Link to={`/todos/${user.id}`}><Button className="user-todos m-2 w-50">user-todos</Button></Link>
                    </div>

                </div> :
                <div>
                    <h4 className="lds-dual-ring text-center"></h4>
                </div>
            }
        </div>
    );
};

export default SingleUserPage;