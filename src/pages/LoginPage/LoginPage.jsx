import React, { useState } from "react";
import "./LoginPage.scss";

const LoginPage = () => {

    const [type, setType] = useState("signIn");
    const handleOnClick = str => {
        if (str !== type) {
            setType(str);
        }
    };

    const [signinState, setSigninState] = useState({
        email: "",
        password: ""
    });
    const handleSignInChange = evt => {
        setSigninState({
            ...signinState,
            [evt.target.name]: evt.target.value
        });
    };

    const [registerState, setRegisterState] = useState({
        name: "",
        email: "",
        password: ""
    });
    const handleRegisterChange = evt => {
        setRegisterState({
            ...registerState,
            [evt.target.name]: evt.target.value
        });
    };

    return (
        <div className="loginpage">
            <div className={"container " + (type === "signUp" ? "rightActive" : "")} id="container">
                <div className="form-container register-container">
                    <form>
                        <h1>Create Account</h1>
                        <input type="text" name="name" value={registerState.name} onChange={handleRegisterChange} placeholder="Name" />
                        <input type="email" name="email" value={registerState.email} onChange={handleRegisterChange} placeholder="Email" />
                        <input type="password" name="password" value={registerState.password} onChange={handleRegisterChange} placeholder="Password" />
                        <button>Register</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Sign in</h1>
                        <input type="email" placeholder="Email" name="email" value={signinState.email} onChange={handleSignInChange} />
                        <input type="password" name="password" placeholder="Password" value={signinState.password} onChange={handleSignInChange} />
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="windowContainer">
                    <div className="window">
                        <div className="windowPanel windowLeft">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="windowBtn" id="signIn" onClick={() => handleOnClick("signIn")}>Sign In</button>
                        </div>
                        <div className="windowPanel windowRight">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start shopping</p>
                            <button className="windowBtn" id="signUp" onClick={() => handleOnClick("signUp")}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoginPage;