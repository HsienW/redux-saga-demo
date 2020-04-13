import {all} from 'redux-saga/effects';
import authSaga from './auth/auth-saga';
import counterSaga from './counter/counter-saga';
import userListSaga from './user-list/user-list-saga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        counterSaga(),
        userListSaga()
    ])
}

