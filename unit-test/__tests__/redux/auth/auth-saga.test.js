import {describe} from '@jest/globals';
import {call, all} from 'redux-saga/effects';
import {fakeProfileApi, fakeSubscribeApi} from '../../../../src/api/api-simulation';
import {loginSaga} from '../../../../src/redux/auth/auth-saga';
// import {expectSaga} from 'redux-saga-test-plan';
// import * as matchers from 'redux-saga-test-plan/matchers';

describe('AuthSaga', () => {
    const testData = {
        account: 'test',
        password: 'test'
    };

    test('loginSaga process should go through all fake api', () => {
        const apiGenerator = loginSaga(testData.account, testData.password);
        const callGetDataApi = apiGenerator.next().value;
        expect(callGetDataApi).toEqual(
            all([
                call(fakeProfileApi, testData.account, testData.password),
                call(fakeSubscribeApi, testData.account, testData.password)
            ])
        );
    });

    // test('authSaga process should go through fork effect ', () => {
    // });

});
