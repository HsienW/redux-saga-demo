import {put, takeEvery} from 'redux-saga/effects';

export const counterAction = {
    VALUE_CHANGING_START: 'VALUE_CHANGING_START',
    VALUE_CHANGING_SUCCESS: 'VALUE_CHANGING_SUCCESS',
};

export const startChangeValue = value => ({
    type: counterAction.VALUE_CHANGING_SUCCESS,
    payload: {
        value
    },
});

export const changeValueAction = value => ({
    type: counterAction.VALUE_CHANGING_SUCCESS,
    payload: {
        value
    },
});

function* handleCounterValueChange(change) {
    yield put(changeValueAction(change));
}

function* counterSaga(change) {
    yield takeEvery(counterAction.VALUE_CHANGING_START, handleCounterValueChange);
}

export default counterSaga;
