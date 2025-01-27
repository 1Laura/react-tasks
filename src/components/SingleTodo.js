import React from 'react';

const SingleTodo = ({userTodosInfo}) => {
    return (
        <div className="card flex-wrap m-2 p-2">
            <h5>{userTodosInfo.title}</h5>
        </div>
    );
};

export default SingleTodo;