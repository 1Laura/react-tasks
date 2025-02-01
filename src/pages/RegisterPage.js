import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import useUserStore from "../store/main";

const RegisterPage = () => {
    const {error,setUsername, setUserPassword, setError} = useUserStore();
    const usernameRef = useRef();
    const userPass1Ref = useRef();
    const userPass2Ref = useRef();
    const navigate = useNavigate();

    function registerWithValidation() {
        const username = usernameRef.current.value;
        const password1 = userPass1Ref.current.value;
        const password2 = userPass2Ref.current.value;
        if (!username || !password1 || !password2) {
            setError("Visi laukai privalomi!");
            return;
        }

        if (password1.length < 6) {
            setError("Slaptažodis turi būti bent 6 simbolių ilgio.");
            return;
        }

        if (password1 !== password2) {
            setError("Slaptažodžiai nesutampa.");
            return;
        }

        setUsername(username);
        setUserPassword(password1);
        setError(""); // Išvalome klaidų pranešimą

        navigate("/");

    }

    return (
        <div className={"container"}>
            <input type="text" placeholder={"username"} ref={usernameRef}/>
            <input type="text" placeholder={"Password1"} ref={userPass1Ref}/>
            <input type="text" placeholder={"Password2"} ref={userPass2Ref}/>
            <button onClick={registerWithValidation}>Register</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default RegisterPage;