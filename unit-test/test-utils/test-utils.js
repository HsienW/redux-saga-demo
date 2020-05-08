import React from 'react';
import {render} from '@testing-library/react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const createRootReducer = (reducer) => {
    return combineReducers({
        reducer
    });
};

export const providerComponentGenerator = (component, reducer, initState) => {
    const store = createStore(createRootReducer(reducer), initState);
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
};
