import {userListAction} from './user-list-saga';

const initState = {
    userListData: []
};

export default function userListReducer(state = initState, action) {
    switch (action.type) {
        case userListAction.GET_USER_LIST_START:
            return {userListData: state};

        case userListAction.GET_USER_LIST_SUCCESS:
        case userListAction.GET_USER_LIST_FAIL:
            return {userListData: action.payload.response};
        default:
            return state
    }
}