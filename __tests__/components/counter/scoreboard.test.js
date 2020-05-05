import React from 'react';
import {render} from '@testing-library/react';
import {describe, expect} from '@jest/globals';
import {CounterScoreboard} from '../../../src/components';
import {createStore, combineReducers} from 'redux';
import {Provider, useDispatch} from 'react-redux';
import counterReducer from '../../../src/redux/counter/counter-reducer';
import '@testing-library/jest-dom';

const rootReducer = combineReducers({
    counterReducer,
});

const generateComponent = (component, initState) => {
    const store = createStore(rootReducer, initState);
    return render(
        <Provider store={store}>
            {component}
        </Provider>,
    );
};

describe('CounterScoreboard', () => {
    test('should create', () => {
        const {getByTestId} = generateComponent(<CounterScoreboard/>);
        expect(getByTestId('counter-scoreboard')).toBeInTheDocument();
    });

    test('CounterScoreboard dispatch add action', () => {
        const mockDispatch = jest.fn();
        const mockUseDispatch = jest.spyOn({useDispatch}, 'useDispatch');
        mockUseDispatch.mockReturnValue(mockDispatch);

        // const {getByTestId} = generateComponent(<CounterScoreboard/>);
        // expect(mockDispatch.mock.calls[0][0]).toEqual({ type: 'FETCH_DATA_BEGIN' });
        // expect(getByTestId('counter-scoreboard')).toHaveTextContent('1');
    });
});
