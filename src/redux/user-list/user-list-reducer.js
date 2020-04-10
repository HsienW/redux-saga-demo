import {userListAction} from './user-list-saga';

const initState = {
    getStatus: false,
    data: []
};

export default function userListReducer(state = initState, action) {
    switch (action.type) {
        case userListAction.GET_USER_LIST_SUCCESS:
        case userListAction.GET_USER_LIST_FAIL:
            return {data: action.payload};
        default:
            return state
    }
}
