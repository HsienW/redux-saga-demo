import React from 'react';
import {describe, expect} from '@jest/globals';
import {Counter} from '../../../../src/containers';
import {CounterScoreboard} from '../../../../src/components';
import {fireEvent} from '@testing-library/react';
import {providerRenderStore, providerRenderWithRedux} from '../../../test-utils/test-utils';
// import renderHook from '@testing-library/react-hooks';
import counterReducer from '../../../../src/redux/counter/counter-reducer';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
//
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';

// import * as reactRedux from 'react-redux';
import '@testing-library/jest-dom';

describe('CounterScoreboard', () => {
    test('should create', () => {
        const {getByTestId} = providerRenderStore(
            <CounterScoreboard/>,
            counterReducer,
        );
        expect(getByTestId('counter-scoreboard')).toBeInTheDocument();
    });

    // todo should check redux type whether meet current testing type.

    test('can render with redux with custom store', () => {
        // this is a silly store that can never be changed
        const store = createStore(combineReducers(counterReducer), {counter: 10});
        providerRenderWithRedux(<Counter/>, {
            store,
        });
        fireEvent.click(screen.getByText('Increment'));
        expect(screen.getByTestId('counter-scoreboard')).toHaveTextContent('計分板: 10');
    });


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
