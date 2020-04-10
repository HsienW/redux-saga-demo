import {call, put, takeEvery} from 'redux-saga/effects';
import {userListApiSimulation} from '../../common/api-simulation';

export const userListAction = {
    GET_USER_LIST_START: 'GET_USER_LIST_START',
    GET_USER_LIST_SUCCESS: 'GET_USER_LIST_SUCCESS',
    GET_USER_LIST_FAIL: 'GET_USER_LIST_FAIL'
};

export const getUserListStart = value => ({
    type: userListAction.GET_USER_LIST_START,
    payload: {
        value
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
    const data = yield call(
        () => userListApiSimulation
            .then(response => response),
    );
    yield put(getUserListSuccess(data));
}

function* userListSaga() {
    yield takeEvery(userListAction.GET_USER_LIST_START, fetchUserListData);
}

export default userListSaga;
