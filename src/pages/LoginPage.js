import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const LoginPage = ({setSecret}) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    function loginWithValidation() {
        const userLogin = {
            name: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        console.log(userLogin);

        const option = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userLogin),
        };

        fetch("http://167.99.138.67:1111/login", option)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    setError(null);
                    setSecret(data.secretKey);
                    navigate("/createpost");
                } else {
                    setError(data.message)
                }
            })
    }

    return (
        <div className="container">
            <h3>Login</h3>
            <input type="text" placeholder="Enter username" ref={usernameRef}/>
            <input type="password" placeholder="Enter password" ref={passwordRef}/>
            {error && <h5>{error}</h5>}
            <button onClick={loginWithValidation}>Login</button>
        </div>
    );
};

export default LoginPage;