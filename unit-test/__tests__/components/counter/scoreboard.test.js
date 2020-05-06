import React from 'react';
import {describe, expect} from '@jest/globals';
import {CounterScoreboard} from '../../../../src/components';
import {useDispatch} from 'react-redux';
import {providerComponentGenerator} from '../../../test-common/test-common';
import '@testing-library/jest-dom';

describe('CounterScoreboard', () => {
    test('should create', () => {
        const {getByTestId} = providerComponentGenerator(<CounterScoreboard/>);
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
