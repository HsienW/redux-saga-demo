import {all} from 'redux-saga/effects';
import counterSaga from './counter/counter-saga';
import userListSaga from './user-list/user-list-saga';

export default function* rootSaga() {
    yield all([
        counterSaga(),
        userListSaga()
    ])
}

