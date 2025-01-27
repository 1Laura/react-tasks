import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import http from "../plugins/https";
import SingleTodo from "../components/SingleTodo";


const UserTodosPage = () => {
    const {id} = useParams();
    const [userAllTodos, setUserAllTodos] = useState([]);

    useEffect(() => {
        http("https://jsonplaceholder.typicode.com/todos?userId=" + id)
            .then(data => {
                console.log(data)
                setUserAllTodos(data)
            })
    }, []);


    return (
        <div>
            {userAllTodos.map(todo =>
                <SingleTodo key={todo.id} userTodosInfo={todo}/>
            )}
        </div>
    );
};

export default UserTodosPage;