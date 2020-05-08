import React from 'react';

const UserListItem = (item) => {
    return (
        <li data-testid='user-list-item'>Name: {item.name}</li>
    );
};

export default UserListItem;
