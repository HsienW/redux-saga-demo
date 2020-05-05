import React from 'react';
import {describe, expect} from '@jest/globals';
import {render} from '@testing-library/react';
import {CounterScoreboard} from '../../../src/components';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import toBeInTheDocument from '@testing-library/jest-dom';
import counterReducer from '../../../src/redux/counter/counter-reducer';
import '@testing-library/jest-dom/extend-expect';

expect.extend({toBeInTheDocument});

const generateComponent = (component, initState) => {
    const store = createStore(counterReducer, initState);
    return render(
        <Provider store={store}>
            {component}
        </Provider>,
    );
};

describe('CounterScoreboard', () => {
    test('should create',() => {
        const {component} = generateComponent(<CounterScoreboard/>, {counter: 0});
        expect(component('counter-scoreboard')).toBeInTheDocument();
    });

    // test('CounterScoreboard dispatch add action', () => {
    //     const mockDispatch = jest.fn();
    //     const mockUseDispatch = jest.spyOn(useDispatch, 'useDispatch');
    //     mockUseDispatch.mockReturnValue(mockDispatch);
    //
    //     const {component} = generateComponent(<CounterScoreboard/>);
    //     expect(component('counter-scoreboard').textContent).toBe('1');
    //     // const fetchContentDataBtn = component('counter-scoreboard');
    //     // fireEvent.click(fetchContentDataBtn);
    //     //
    //     // expect
    //
    //     // test('counter state value should is 1', () => {
    //     //     expect(component('counter-scoreboard').textContent).toBe('1');
    //     // });
    // });
});
