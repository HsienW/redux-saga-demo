import {counterAction} from './counter-saga';

export default function counterReducer(state = 0, action) {
    switch (action.type) {
        case counterAction.INCREMENT:
        case counterAction.DECREMENT:
            return state;
        default:
            return state
    }
}
