import {describe} from '@jest/globals';
import {userListReducer} from '../../../../src/redux/user-list/user-list-reducer';
import {getUserListSuccess} from '../../../../src/redux/user-list/user-list-saga';

describe('UserListReducer', () => {
    test('Reducer: Get User List Success Action',() => {
        const mockApiRespond = [{id: 1, name: '123'}];
        const assertState = userListReducer({}, getUserListSuccess(mockApiRespond));
        expect(assertState).toEqual({userListData: mockApiRespond});
    });
});
