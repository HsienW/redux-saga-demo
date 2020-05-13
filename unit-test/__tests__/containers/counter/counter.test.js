import React from 'react';
import {describe} from '@jest/globals';
import {providerRenderStore} from '../../../test-utils/test-utils';
import {Counter} from '../../../../src/containers';
// import {CounterScoreboard} from '../../../../src/components/counter/scoreboard';
import {counterReducer} from '../../../../src/redux/counter/counter-reducer';
import {combineReducers} from 'redux';
import '@testing-library/jest-dom';

// jest.mock('CounterScoreboard', () => {
//     const FakeCounterScoreboard = jest.fn(({children}) => children);
//     return {CounterScoreboard: FakeCounterScoreboard};
// });

describe('Counter', () => {
    test.skip('should create', () => {
        const {container} = providerRenderStore(
            <Counter/>,
            combineReducers(counterReducer),
        );
        container.querySelector('input').value = 'Test';
        console.log(container);
        // expect(container).toBeInTheDocument();
    });
});
