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

    test('UserListItem name should value is test', () => {
        const test = {id: 1, name: '123'};
        const {getByTestId} = render(
            <UserListItem
                key={test.id}
                name={test.name}
            />
        );
        expect(getByTestId('user-list-item')).toHaveTextContent('Name: 123');
    });
});
