import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import {loginStart} from '../../redux/auth/auth-saga';
import {useDispatch, useSelector} from "react-redux";

const Auth = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const authData = useSelector(state => state.authReducer.auth);
    const fakeRequest = {
        user: 'fake',
        password: 'fake'
    };

    const handleLogin = () => {
        dispatch(loginStart(fakeRequest));
    };

    useEffect(() => {
        if (authData === undefined) return;
        history.push('/home');
    }, [authData]);

    return (
        <div>
            <div>Please Login</div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
};

export default Auth;
