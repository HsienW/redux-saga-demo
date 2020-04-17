import {all, call, put, take, fork, cancel, cancelled} from 'redux-saga/effects';
import {setSession, clearSession} from '../../common/common';
import {profileApiSimulation, subscribeApiSimulation} from '../../api/api-simulation';

export const loginAction = {
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',
};

export const subscribeAction = {
    GET_SUBSCRIBE_START: 'GET_SUBSCRIBE_START',
    GET_SUBSCRIBE_SUCCESS: 'GET_SUBSCRIBE_SUCCESS',
    GET_SUBSCRIBE_FAIL: 'GET_SUBSCRIBE_FAIL',
};

export const logoutAction = {
    LOGOUT: 'LOGOUT',
};

export const loginStart = request => ({
    type: loginAction.LOGIN_START,
    payload: {
        request
    }
});

export const loginSuccess = response => ({
    type: loginAction.LOGIN_SUCCESS,
    payload: {
        response
    }
});

export const loginFail = response => ({
    type: loginAction.LOGIN_FAIL,
    payload: {
        response
    }
});

export const getSubscribeStart = request => ({
    type: subscribeAction.GET_SUBSCRIBE_START,
    payload: {
        request
    }
});

export const getSubscribeSuccess = response => ({
    type: subscribeAction.GET_SUBSCRIBE_SUCCESS,
    payload: {
        response
    }
});

export const getSubscribeFail = response => ({
    type: subscribeAction.GET_SUBSCRIBE_FAIL,
    payload: {
        response
    }
});

export const logout = response => ({
    type: logoutAction.LOGOUT,
    payload: {
        response
    }
});

function* login(account, password) {
    try {
        // const response = yield call(profileApiSimulation, account, password);
        const [profileResponse, subscribeResponse] = yield all([
            call(profileApiSimulation, account, password),
            call(subscribeApiSimulation, account, password)
        ]);
        yield put(loginSuccess(profileResponse));
        yield put(getSubscribeSuccess(subscribeResponse));
        yield call(setSession, profileResponse);
        return [profileResponse, subscribeResponse]
    } catch(error) {
        yield put(loginFail(error));
        // todo 在這裡需要 get subscribe 失敗操作
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
