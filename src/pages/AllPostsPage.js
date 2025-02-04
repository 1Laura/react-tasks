import React from 'react';
import useUserStore from "../store/main";

const AllPostsPage = () => {
    const {posts} = useUserStore();

    return (
        <div className="container d-flex">
            {posts.map((post, index) =>
                <div className="user-card flex-wrap" key={index}>
                    <img src={post.imageUrl} alt=""/>
                    <p>{post.description}</p>
                </div>
            )}

        </div>
    );
};

export default AllPostsPage;