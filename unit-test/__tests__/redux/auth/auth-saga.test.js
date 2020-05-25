import {describe} from '@jest/globals';
import {call, all} from 'redux-saga/effects';
import {profileApiSimulation, subscribeApiSimulation} from '../../../../src/api/api-simulation';
import {
    loginSaga,
    // loginSuccess,
    // getSubscribeSuccess,
    // loginAction,
    // subscribeAction
} from '../../../../src/redux/auth/auth-saga';
// import * as matchers from 'redux-saga-test-plan/matchers';

describe('AuthSaga', () => {
    const testData = {
        account: 'test',
        password: 'test'
    };

    test('API: Get Login Data', () => {
        const apiGenerator = loginSaga(testData.account, testData.password);
        const callGetDataApi = apiGenerator.next().value;
        expect(callGetDataApi).toEqual(
            all([
                call(profileApiSimulation, testData.account, testData.password),
                call(subscribeApiSimulation, testData.account, testData.password)
            ])
        );
    });

});
