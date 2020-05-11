import React from 'react';
import {describe, expect} from '@jest/globals';
import {providerRenderStore} from '../../../test-utils/test-utils';
import {Counter} from '../../../../src/containers';
import {counterReducer} from '../../../../src/redux/counter/counter-reducer';
import '@testing-library/jest-dom';

describe('Counter', () => {
    test('should create',async () => {
        const {getByTestId} = providerRenderStore(
            <Counter/>,
            counterReducer,
            {counterReducer: {counter: 0}}
        );
        expect(getByTestId('counter-container')).toBeInTheDocument();
    });
});
