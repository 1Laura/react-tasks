const User = () => {
    const time = new Date().toLocaleString();
    return (
        <div>
            <img className="border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRObOS2pzUxLcGf9G9OG8l-llOjEcAyjc-8lzflacDW0isJqSsJ3sHwyac&s" alt=""/>
            <h5>Title</h5>
            <p>Time: {time}</p>
        </div>
    );
};

export default User;