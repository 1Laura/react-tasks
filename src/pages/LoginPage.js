import React from 'react';
import useUserStore from "../store/main";

const LoginPage = () => {
    const {username, userPassword} = useUserStore((state) => state);
    console.log(username, userPassword)
    return (
        <div className={"container"}>
            <input type="text" placeholder={username}/>
            <input type="text" placeholder={"Password 1"}/>
            <button>Login</button>
            //to profile page
        </div>
    );
};

export default LoginPage;