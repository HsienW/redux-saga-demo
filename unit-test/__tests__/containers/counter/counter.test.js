import React from 'react';
import {describe} from '@jest/globals';
import {providerRenderStore} from '../../../test-utils/test-utils';
import {Counter} from '../../../../src/containers';
import {counterReducer} from '../../../../src/redux/counter/counter-reducer';
// import * as component from '../../../../src/components/counter/scoreboard';
import {CounterScoreboard} from '../../../../src/components/counter/scoreboard';
import '@testing-library/jest-dom';

jest.mock('../../../../src/components/counter/scoreboard');

// const getCounterScoreboardSpy = jest.spyOn(
//     component, 'CounterScoreboard',
// );

describe('Counter', () => {

    beforeAll(() => {
        CounterScoreboard.mockReturnValue(<div>計分板: 10</div>);
    });

    test('should create', () => {
        const {getByTestId} = providerRenderStore(
            <Counter/>,
            counterReducer,
            {counterReducer: {counter: 10}}
        );
        expect(CounterScoreboard).toHaveBeenCalled();
        expect(getByTestId('counter-container')).toBeInTheDocument();
    });
});

