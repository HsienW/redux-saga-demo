import {combineReducers} from 'redux';
import counterReducer from '../redux/counter/counter-reducer';
import userListReducer from '../redux/user-list/user-list-reducer';

const rootReducer = combineReducers({
    counterReducer,
    userListReducer,
});

export default rootReducer;
