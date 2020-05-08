import React from 'react';
import {describe, expect} from '@jest/globals';
// import {Counter} from '../../../../src/containers';
import {CounterScoreboard} from '../../../../src/components';
// import {fireEvent} from '@testing-library/react';
import {providerComponentGenerator} from '../../../test-utils/test-utils';
import renderHook from '@testing-library/react-hooks';
import counterReducer from '../../../../src/redux/counter/counter-reducer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

// import * as reactRedux from 'react-redux';
import '@testing-library/jest-dom';

describe('CounterScoreboard', () => {
    test('should create', () => {
        const {getByTestId} = providerComponentGenerator(<CounterScoreboard/>);
        expect(getByTestId('counter-scoreboard')).toBeInTheDocument();
    });

    // todo should check redux type whether meet current testing type.
    test('CounterScoreboard dispatch add action', () => {

        const store = createStore(counterReducer, {
            counter: 10
        });
        const {result} = renderHook(() => CounterScoreboard(), {
            // eslint-disable-next-line react/prop-types,react/display-name
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>});

        expect(result.current.counter).toBe(10);

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
    });
});
