import {put, takeEvery} from 'redux-saga/effects';

export const counterAction = {
    CHANGING: 'CHANGING',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
};

export const increment = value => ({
    type: counterAction.INCREMENT,
    payload: {
        value
    },
});

export const decrement = value => ({
    type: counterAction.DECREMENT,
    payload: {
        value
    },
});

function* handleCounterValue(value) {
    yield put(increment(value));
}

function* counterSaga() {
    yield takeEvery(counterAction.CHANGING, handleCounterValue);
}

export default counterSaga;
