import {call, put, takeEvery} from 'redux-saga/effects';
import {userListApiSimulation} from '../../api/api-simulation';

export const userListAction = {
    GET_USER_LIST_START: 'GET_USER_LIST_START',
    GET_USER_LIST_SUCCESS: 'GET_USER_LIST_SUCCESS',
    GET_USER_LIST_FAIL: 'GET_USER_LIST_FAIL'
};

export const getUserListStart = request => ({
    type: userListAction.GET_USER_LIST_START,
    payload: {
        request
    },
});

export const getUserListSuccess = response => ({
    type: userListAction.GET_USER_LIST_SUCCESS,
    payload: {
        response
    },
});

export const getUserListFail = response => ({
    type: userListAction.GET_USER_LIST_FAIL,
    payload: {
        response
    },
});

function* fetchUserListData() {
    try {
        const data = yield call(userListApiSimulation);
        yield put(getUserListSuccess(data));
    } catch (error) {
        yield put(getUserListFail(error));
    }
}

function* userListSaga() {
    yield takeEvery(userListAction.GET_USER_LIST_START, fetchUserListData);
}

export default userListSaga;
