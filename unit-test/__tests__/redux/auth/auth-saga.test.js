import {describe} from '@jest/globals';
// import {call} from 'redux-saga/effects';
import {login} from '../../../../src/redux/auth/auth-saga';
// import {profileApiSimulation} from '../../../../src/api/api-simulation';

describe('AuthSaga', () => {
    test('API: Get Profile Data', () => {
        const testData = {
            account: 'test',
            password: 'test'
        };
        const apiGenerator = login(testData.account, testData.password);
        const callGetDataApi = apiGenerator.next().value;
        console.log(callGetDataApi);
        // expect(callGetDataApi).toEqual(call(profileApiSimulation));
    });
});
