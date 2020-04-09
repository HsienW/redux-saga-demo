import {counterAction} from './counter-saga';

export default function counterReducer(state = 0, action) {
    switch (action.type) {
        case counterAction.VALUE_CHANGING_SUCCESS:
            return state;
        default:
            return state
    }
}
