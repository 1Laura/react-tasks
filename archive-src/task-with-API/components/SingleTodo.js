import React from 'react';

const SingleTodo = ({userTodosInfo}) => {
    const backgroundColor = userTodosInfo.completed ? "lightgreen" : "#f50000b0";

    return (
        <div style={{backgroundColor}} className="card flex-wrap m-2 p-2">
            <h5>{userTodosInfo.title}</h5>
        </div>
    );
};

export default SingleTodo;