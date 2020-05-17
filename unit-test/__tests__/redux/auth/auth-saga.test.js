import {describe} from '@jest/globals';
// import {call} from 'redux-saga/effects';
import {expectSaga} from 'redux-saga-test-plan';
import {profileApiSimulation, subscribeApiSimulation} from '../../../../src/api/api-simulation';
import {
    loginSaga,
    loginSuccess,
    getSubscribeSuccess,
    loginAction,
    subscribeAction
} from '../../../../src/redux/auth/auth-saga';
import * as matchers from 'redux-saga-test-plan/matchers';

describe('AuthSaga', () => {
    test('API: Get Login Data', () => {
        const testData = {
            account: 'test',
            password: 'test'
        };
        const apiGenerator = loginSaga(testData.account, testData.password);
        const callGetDataApi = apiGenerator.next().value;
        console.log(callGetDataApi);
        // expect(callGetDataApi).toEqual(call(profileApiSimulation));
    });

    // todo need change to better test method for saga function.
    test('provides values for effects inside arrays', () => {
        const testData = {
            account: 'test',
            password: 'test'
        };
        return expectSaga(loginSaga)
            .provide([
                [matchers.call.fn(profileApiSimulation), testData.account, testData.password],
                [matchers.call.fn(subscribeApiSimulation), testData.account, testData.password],
            ])
            .put(loginSuccess(
                {type: loginAction.LOGIN_SUCCESS, payload: {response: 'test'}}
            ))
            .put(getSubscribeSuccess(
                {type: subscribeAction.GET_SUBSCRIBE_SUCCESS, payload: {response: 'test'}}
            ))
            .run();
    });

    // test('API: Get Login Data use test plan', () => {
    //     const testData = {
    //         account: 'test',
    //         password: 'test'
    //     };
    //     const apiGenerator = testSaga(login, testData.account, testData.password);
    //     const callGetDataApi = apiGenerator.next().all;
    //     console.log(callGetDataApi);
    // });
});
