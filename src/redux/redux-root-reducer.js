import {combineReducers} from 'redux';
import authReducer from './auth/auth-reducer';
import counterReducer from '../redux/counter/counter-reducer';
import userListReducer from '../redux/user-list/user-list-reducer';

const rootReducer = combineReducers({
    authReducer,
    counterReducer,
    userListReducer,
});

export default rootReducer;
