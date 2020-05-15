import {describe} from '@jest/globals';
import {call, put} from 'redux-saga/effects';
import {fetchUserListData, getUserListSuccess} from '../../../../src/redux/user-list/user-list-saga';
import {userListApiSimulation} from '../../../../src/api/api-simulation';

describe('UserListSaga', () => {

    test('API: Get User List Data', () => {
        const apiGenerator = fetchUserListData();
        const getDataApi = apiGenerator.next().value;
        // console.log(callGetDataApi);
        expect(getDataApi).toEqual(call(userListApiSimulation));

        const mockApiRespond = [{id: 1, name: '123'}];
        const getDataApiSuccess = apiGenerator.next(mockApiRespond).value;
        expect(getDataApiSuccess).toEqual(put(getUserListSuccess(mockApiRespond)));
    });
});
