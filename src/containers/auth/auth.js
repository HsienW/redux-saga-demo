import React from 'react'
// import {Link} from 'react-router-dom';
import {loginStart} from '../../redux/auth/auth-saga';
import {useDispatch, useSelector} from "react-redux";

const Auth = () => {
    const dispatch = useDispatch();
    const authData = useSelector(state => state.authReducer.auth);
    const fakeRequest = {
        user: 'fake',
        password: 'fake'
    };

    const handleLogin = () => {
        dispatch(loginStart(fakeRequest));
    };

    return (
        <div>
            <div>Please Login</div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
};

export default Auth
