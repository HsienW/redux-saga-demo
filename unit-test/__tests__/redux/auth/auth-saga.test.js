import {describe} from '@jest/globals';
// import {call} from 'redux-saga/effects';
import {expectSaga} from 'redux-saga-test-plan';
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
    // test('API: Get Login Data', () => {
    //     // const testData = {
    //     //     account: 'test',
    //     //     password: 'test'
    //     // };
    //     // const apiGenerator = loginSaga(testData.account, testData.password);
    //     // const callGetDataApi = apiGenerator.next().value;
    //     // console.log(callGetDataApi);
    //     // expect(callGetDataApi).toEqual(call(profileApiSimulation));
    // });

    // todo need change to better test method for saga function.
    test('provides values for effects inside arrays', () => {
        const mockProfileRespond = {
            userName: 'demo',
            token: '1234567890'
        };

        const mockSubscribeRespond = {
            title: 'Subscribe',
            subscribeItem: [
                {
                    title: 'Subscribe A',
                    number: 1
                },
            ]
        };
        return expectSaga(loginSaga)
            // .provide({
            //     all: () => [mockProfileRespond, mockSubscribeRespond],
            // })
            .provide([
                // call(profileApiSimulation,'123', '456'),
                // call(subscribeApiSimulation,'789', '000')
                [profileApiSimulation('123', '456'),mockProfileRespond],
                [subscribeApiSimulation('789', '000'), mockSubscribeRespond],
            ])
            // .put(loginSuccess(
            //     {type: loginAction.LOGIN_SUCCESS, payload: mockProfileRespond}
            // ))
            // .put(getSubscribeSuccess(
            //     {type: subscribeAction.GET_SUBSCRIBE_SUCCESS, payload: mockSubscribeRespond}
            // ))
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
