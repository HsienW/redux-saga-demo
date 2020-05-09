import React from 'react';
import {render} from '@testing-library/react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// export const createRootReducer = (reducer) => {
//     return combineReducers(reducer);
// };

export const providerRenderStore = (component, reducer, initState) => {
    const store = createStore(combineReducers(reducer), initState);
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
};

export function providerRenderWithRedux(component, reducer, initialState) {
    const actions = [];
    const observerMiddleware = () => next => action => {
        actions.push(action);
        return next(action);
    };
    const store = createStore(reducer, initialState, applyMiddleware(observerMiddleware));
    const utils = {
        dispatch(action) {
            return store.dispatch(action);
        },
        getDispatchedActions() {
            return actions;
        },
        getState() {
            return store.getState();
        },
    };
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        ...utils,
    };
}
