import {all} from 'redux-saga/effects';
import {watchIncrementAsyncSaga} from './counter/counter-action';

export default function* rootSaga() {
    yield all([
        watchIncrementAsyncSaga()
    ])
}

