import React from 'react';
import {describe, expect} from '@jest/globals';
import {render} from '@testing-library/react';
import {CounterScoreboard} from '../../../src/components';

// jest.mock('counterReducer', () => ({
//     useSelector: jest.fn()
// }));

describe('CounterScoreboard', () => {

    test('should create', () => {
        const component = render(<CounterScoreboard/>);
        expect(component).toBeTruthy();
    });

    describe('CounterScoreboard state check', () => {
        test('counter state value should is 1', async () => {
            const component = render(<CounterScoreboard/>);
            component.counter = 1;
            expect(component.getByTestId('counter-scoreboard').textContent).toBe('1');
        });
    });
});
