import {loginAction, logoutAction, subscribeAction} from './auth-saga';

const initState = {
    userName: '',
    token: ''
};

export default function authReducer(state = initState, action) {
    switch (action.type) {
        case loginAction.LOGIN_SUCCESS:
        case loginAction.LOGIN_FAIL:
        case subscribeAction.GET_SUBSCRIBE_SUCCESS:
        case subscribeAction.GET_SUBSCRIBE_FAIL:
            return {auth: action.payload};
        case logoutAction.LOGOUT:
            return {auth: state};
        default:
            return state
    }
}
