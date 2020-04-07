import delay from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';

function* incrementAsyncSaga() {
    yield delay(1000);
    yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsyncSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsyncSaga)
}
