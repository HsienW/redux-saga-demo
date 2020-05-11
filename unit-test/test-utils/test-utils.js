import React from 'react';
import {render} from '@testing-library/react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// const createRootReducer = (reducer) => {
//     return combineReducers({
//         reducer
//     });
// };

export const providerRenderStore = (component, reducer, initState = {}) => {
    const store = createStore(reducer, initState);
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
};

export const providerRenderWithRedux = (reducer) => {
    return (component, {initState, store = createStore(reducer, initState),} = {}) => ({
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    });
};

// export const renderWithRedux = (ui, { initialState, store = createStore(reducer, initialState), } = {}) => ({
//     ...render(<Provider store={store}>{ui}</Provider>),
//     store,
// });

// export const providerRenderWithRedux = (component, reducer) => {
//     return (
//         component,
//         {initState, store = createStore(reducer, initState)} = {}
//     ) => ({
//         ...render(
//             <Provider store={store}>{component}</Provider>
//         ), store
//     });
// };

// export const renderWithRedux = (
//     component,
//     {initialState, store = createStore(reducer, initialState)} = {}) => ({
//     ...render(<Provider store={store}>{ui}</Provider>),
//     store,
// });

// export function providerRenderWithRedux(component, reducer, initialState) {
//     const actions = [];
//     const observerMiddleware = () => next => action => {
//         actions.push(action);
//         return next(action);
//     };
//     const store = createStore(reducer, initialState, applyMiddleware(observerMiddleware));
//     const utils = {
//         dispatch(action) {
//             return store.dispatch(action);
//         },
//         getDispatchedActions() {
//             return actions;
//         },
//         getState() {
//             return store.getState();
//         },
//     };
//     return {
//         ...render(<Provider store={store}>{component}</Provider>),
//         ...utils,
//     };
// }
