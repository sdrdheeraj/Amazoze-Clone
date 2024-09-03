import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const navigate = useNavigate();
    const [useremail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');
    
    const loginuser = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(useremail, userpassword)
            .then(() => {
                navigate('/');
            })
            .catch(error => alert(error.message));
    }

    const signupuser = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(useremail, userpassword)
            .then(() => {
                navigate('/');
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password"/>
                    <button onClick={loginuser} type="submit" className="login__SignInButton" aria-label="Sign In">Sign In</button>
                </form>
                <p>By Signing in, you are agree to Amazon's Terms and Condition</p>
                <button onClick={signupuser} className="login__registerButton" aria-label="Create your Amazon Account">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
