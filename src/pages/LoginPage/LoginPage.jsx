import React, { useState } from "react";
import "./LoginPage.scss";
import usePostFetch from "../../hooks/usePostFetch";
import { useDispatch, useSelector } from "react-redux";
import { removeAuth, setAuth } from "../../redux/authReducer";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.auth);
    // console.log(auth);

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

    const signInHandle = async (e) => {
        e.preventDefault();
        const data = await usePostFetch('/login', {
            email: signinState.email,
            password: signinState.password
        });
        // console.log(data.data);
        dispatch(setAuth(data.data))
        if (data.data && data.data.user) {
            toast.success(`Welcome back, ${data.data.user.name}`, {
                position: toast.POSITION.TOP_LEFT
            });
            navigate('/');
        }
        else if (data.data) {
            toast.warn(data.data.error || data.data.message, {
                position: toast.POSITION.TOP_LEFT
            });
        }
        else {
            console.log(data);
            toast.error(data.error, {
                position: toast.POSITION.TOP_LEFT
            });
        }
        // dispatch(removeAuth());
    }

    const registerHandle = async (e) => {
        e.preventDefault();
        const data = await usePostFetch('/register', {
            email: registerState.email,
            password: registerState.password,
            name: registerState.name
        });
        // console.log(data.data);

        if (data.data && data.data.user) {
            dispatch(setAuth(data.data))
            toast.success(`Hello ${data.data.user.name}`, {
                position: toast.POSITION.TOP_LEFT
            });
            navigate('/');
        }
        else if (data.data) {
            toast.warn(data.data.error || data.data.message, {
                position: toast.POSITION.TOP_LEFT
            });
        }
        else {
            toast.error(data.error, {
                position: toast.POSITION.TOP_LEFT
            });
        }
    }

    return (
        <div className="loginpage">
            <div className={"container " + (type === "signUp" ? "rightActive" : "")} id="container">
                <div className="form-container register-container">
                    <form>
                        <h1>Create Account</h1>
                        <input type="text" name="name" value={registerState.name} onChange={handleRegisterChange} placeholder="Name" />
                        <input type="email" name="email" value={registerState.email} onChange={handleRegisterChange} placeholder="Email" />
                        <input type="password" name="password" value={registerState.password} onChange={handleRegisterChange} placeholder="Password" />
                        <button onClick={registerHandle}>Register</button>
                        <div className="mobileBtn">
                            Already a customer? <span onClick={() => handleOnClick("signIn")}>Sign In</span>
                        </div>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Sign in</h1>
                        <input type="email" placeholder="Email" name="email" value={signinState.email} onChange={handleSignInChange} />
                        <input type="password" name="password" placeholder="Password" value={signinState.password} onChange={handleSignInChange} />
                        <button onClick={signInHandle}>Sign In</button>
                        <div className="mobileBtn">
                            New here? <span  onClick={() => handleOnClick("signUp")}>Sign Up</span>
                        </div>
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