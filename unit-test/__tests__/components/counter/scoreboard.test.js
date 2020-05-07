import React from 'react';
import {describe, expect} from '@jest/globals';
// import {Counter} from '../../../../src/containers';
import {CounterScoreboard} from '../../../../src/components';
// import {fireEvent} from '@testing-library/react';
import {providerComponentGenerator} from '../../../test-common/test-common';
import * as reactRedux from 'react-redux';
import '@testing-library/jest-dom';

describe('CounterScoreboard', () => {
    test('should create', () => {
        const {getByTestId} = providerComponentGenerator(<CounterScoreboard/>);
        expect(getByTestId('counter-scoreboard')).toBeInTheDocument();
    });

    test('CounterScoreboard dispatch add action', () => {

        // todo need change mock redux dispatch action to component render case.
        const mockCounterValue = {counter: 1};
        const mockRedux = jest.spyOn(reactRedux, 'useSelector');
        // jest.fn 使用上會需要賦予基本的回傳值, 才能夠讓正常執行模擬一個function
        // const mockDispatch = jest.fn();

        // mockReturnValueOnce or mockReturnValue 前者為只回傳一次, 後者為永久回傳該
        mockRedux.mockReturnValue(mockCounterValue);

        // const {getByTestId} = providerComponentGenerator(<CounterScoreboard/>);
        // expect(getByTestId('counter-scoreboard')).toEqual('計分板: 1');
        // const {getByTestId} = providerComponentGenerator(<Counter/>);
        // const incrementCounterBtn = getByTestId('increment-counter-btn');
        // fireEvent.click(incrementCounterBtn);
        // console.log(mockDispatch.mock.calls[0][0]);
        // expect(mockDispatch.mock.calls).toEqual({type: 'VALUE_CHANGING_SUCCESS'});
    });
});
