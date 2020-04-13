import {call, put, take, fork, cancel, cancelled} from 'redux-saga/effects';
import {setSession, clearSession} from "../../common/common";
import {loginApiSimulation} from "../../common/api-simulation";

export const loginAction = {
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',
};

export const logoutAction = {
    LOGOUT: 'LOGOUT',
};

export const loginStart = request => ({
    type: loginAction.LOGIN_START,
    payload: {
        request
    },
});

export const loginSuccess = response => ({
    type: loginAction.LOGIN_SUCCESS,
    payload: {
        response
    },
});

export const loginFail = response => ({
    type: loginAction.LOGIN_FAIL,
    payload: {
        response
    },
});

export const logout = response => ({
    type: logoutAction.LOGOUT,
    payload: {
        response
    },
});

function* login(user, password) {
    try {
        const userData = yield call(loginApiSimulation, user, password);
        yield put(loginSuccess(userData));
        yield call(setSession, userData);
        return userData
    } catch(error) {
        yield put(loginFail(error));
    } finally {
        if (yield cancelled()) {
            // todo 在這裡放置特殊的取消操作
        }
    }
}

function* authSaga() {
    while (true) {
        const {user, password} = yield take(loginAction.LOGIN_START);
        const task = yield fork(login, user, password);
        const action = yield take([logoutAction.LOGOUT, loginAction.LOGIN_FAIL]);
        if (action.type === logoutAction.LOGOUT) {
            yield cancel(task);
        }
        yield call(clearSession);
    }
}

export default authSaga;
