import {counterAction} from './counter-saga';

const initState = {
    counter: 0
};

export default function counterReducer(state = initState, action) {
    switch (action.type) {
        case counterAction.VALUE_CHANGING_SUCCESS:
            return {counter: action.payload.value};
        default:
            return state;
    }
}
