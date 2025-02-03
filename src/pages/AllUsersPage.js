import React from 'react';
import useUserStore from "../store/main";

const AllUsersPage = () => {
    const {users} = useUserStore();

    return (
        <div className="container d-flex">
            {users.map((user, index) =>
                <div className="user-card flex-wrap" key={index}>
                    <img src={user.avatar} alt=""/>
                    <p>{user.username}</p>
                </div>
            )}

        </div>
    );
};

export default AllUsersPage;