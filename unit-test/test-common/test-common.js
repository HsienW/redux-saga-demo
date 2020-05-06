import React from 'react';
import {render} from '@testing-library/react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from '../../src/redux/counter/counter-reducer';

const rootReducer = combineReducers({
    counterReducer
});

export const providerComponentGenerator = (component, initState) => {
    const store = createStore(rootReducer, initState);
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
};
