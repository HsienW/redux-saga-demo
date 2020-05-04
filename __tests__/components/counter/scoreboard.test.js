import React from 'react';
import {describe, expect} from '@jest/globals';
import {render} from '@testing-library/react';
import {CounterScoreboard} from '../../../src/components';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import toBeInTheDocument from '@testing-library/jest-dom';
import counterReducer from '../../../src/redux/counter/counter-reducer';

expect.extend({toBeInTheDocument});

describe('CounterScoreboard', () => {
    const store = createStore(counterReducer);
    const {component} = render(
        <Provider store={store}>
            <CounterScoreboard/>
        </Provider>
    );

    //TODO need change other unit test coding for have redux case.
    test('should create', () => {
        const {component} = render(<CounterScoreboard/>);
        expect(component('counter-scoreboard')).toBeInTheDocument();
    });

    test('counter state value should is 1', () => {
        expect(component('counter-scoreboard').textContent).toBe('1');
    });
});
