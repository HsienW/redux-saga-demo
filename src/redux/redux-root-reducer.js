import {combineReducers} from 'redux';
import {authReducer} from './auth/auth-reducer';
import {counterReducer} from './counter/counter-reducer';
import {userListReducer} from './user-list/user-list-reducer';

const rootReducer = combineReducers({
    authReducer,
    counterReducer,
    userListReducer,
});

export default rootReducer;
