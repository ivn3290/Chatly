import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__container">
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/Capp.jpg?auto=format&q=60&fit=max&w=930" alt="Chatly.jpeg"/>
            <div className="login__text">
                <h1>Sign in to Chatly</h1>
            </div>
            <Button type="submit" onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    );
}

export default Login;
