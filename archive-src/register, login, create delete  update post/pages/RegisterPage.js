import React, {useEffect, useRef, useState} from 'react';

const RegisterPage = () => {
    const usernameRef = useRef();
    const passwordOneRef = useRef();
    const passwordTwoRef = useRef();
    const [error, setError] = useState(null);

    function registerWithValidation() {
        const userRegister = {
            name: usernameRef.current.value,
            passwordOne: passwordOneRef.current.value,
            passwordTwo: passwordTwoRef.current.value,
        }

        console.log(userRegister);

        const option = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userRegister),
        };

        fetch("http://167.99.138.67:1111/createaccount", option)
            .then(response => response.json())
            .then(data => {
                console.log(data)

                if (data.success) {
                    setError(null)
                } else {
                    setError(data.message)
                }
            })


    }

    return (
        <div className="container d-block">
            <h3>Register</h3>
            <input type="text" placeholder="Enter username" ref={usernameRef}/><br/>
            <input type="password" placeholder="Enter password" ref={passwordOneRef}/><br/>
            <input type="pasword" placeholder="Reapeat password" ref={passwordTwoRef}/><br/>
            {error && <h5>{error}</h5>}
            <button onClick={registerWithValidation}>Register</button>
        </div>
    );
};

export default RegisterPage;