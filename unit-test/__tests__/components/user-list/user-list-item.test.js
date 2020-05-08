import React from 'react';
import {render} from '@testing-library/react';
import {describe, expect} from '@jest/globals';
import {UserListItem} from '../../../../src/components';
import '@testing-library/jest-dom';

describe('UserListItem', () => {
    test('should create', () => {
        const {getByTestId} = render(<UserListItem/>);
        expect(getByTestId('user-list-item')).toBeInTheDocument();
    });
});
