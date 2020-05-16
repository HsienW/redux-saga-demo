import {describe} from '@jest/globals';
// import {testSaga} from 'redux-saga-test-plan';
// import {all} from 'redux-saga/effects';
import {login} from '../../../../src/redux/auth/auth-saga';
// import {profileApiSimulation} from '../../../../src/api/api-simulation';

describe('AuthSaga', () => {
    test('API: Get Login Data', () => {
        const testData = {
            account: 'test',
            password: 'test'
        };
        const apiGenerator = login(testData.account, testData.password);
        const callGetDataApi = apiGenerator.next().value;
        console.log(callGetDataApi);
        // expect(callGetDataApi).toEqual(call(profileApiSimulation));
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
