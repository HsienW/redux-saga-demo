import React from 'react';
import {describe, expect} from '@jest/globals';
import {CounterScoreboard} from '../../../../src/components';
import {providerRenderStore} from '../../../test-utils/test-utils';
import {counterReducer} from '../../../../src/redux/counter/counter-reducer';
import '@testing-library/jest-dom';


// import {Counter} from '../../../../src/containers';
// import {fireEvent} from '@testing-library/react';
// import renderHook from '@testing-library/react-hooks';
// import {createStore} from 'redux';
// import {combineReducers} from 'redux';
//
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';

// import * as reactRedux from 'react-redux';

describe('CounterScoreboard', () => {
    test('should create', () => {
        const {getByTestId} = providerRenderStore(
            <CounterScoreboard/>,
            counterReducer,
            {counterReducer: {counter: 0}}
        );
        expect(getByTestId('counter-scoreboard')).toBeInTheDocument();
    });

    test('CounterScoreboard counter should value is 10', () => {
        const {getByTestId} = providerRenderStore(
            <CounterScoreboard/>,
            counterReducer,
            {counterReducer: {counter: 10}}
        );
        expect(getByTestId('counter-scoreboard')).toHaveTextContent('計分板: 10');
    });

    // test('CounterScoreboard dispatch add action', () => {
    //
    //     const {getByTestId} = providerRenderStore(
    //         <Counter/>,
    //         counterReducer
    //     );
    //
    //     const {getByText} = providerRenderStore(
    //         <CounterScoreboard/>,
    //         counterReducer
    //     );
    //
    //     fireEvent.click(getByTestId('increment-counter-btn'));
    //     expect(getByTestId('display_count').textContent).toBe('點了1下');
    //     // expect(getByTestId('counter-scoreboard')).toBeInTheDocument();


    // test('CounterScoreboard dispatch add action', () => {
    //
    //     expect(result.current.counter).toBe(10);

    // const {getByText} = providerComponentGenerator(
    //     <CounterScoreboard/>,
    //     counterReducer,
    //     {counter: 10}
    // );
    // expect(getByText('counter-scoreboard')).toHaveTextContent('計分板: 10');

    // const mockCounterValue = {counter: 1};
    // const mockRedux = jest.spyOn(reactRedux, 'useDispatch');
    // // jest.fn 使用上會需要賦予基本的回傳值, 才能夠讓正常執行模擬一個function
    // const mockDispatch = jest.fn();
    //
    // // mockReturnValueOnce or mockReturnValue 前者為只回傳一次, 後者為永久回傳該
    // mockRedux.mockReturnValue(mockDispatch);
    // //
    // const {getByTestId} = providerComponentGenerator(<CounterScoreboard/>);
    // const incrementCounterBtn = getByTestId('increment-counter-btn');
    // fireEvent.click(incrementCounterBtn);
    // expect(getByTestId('counter-scoreboard')).toEqual('計分板: 1');
    // });
});
