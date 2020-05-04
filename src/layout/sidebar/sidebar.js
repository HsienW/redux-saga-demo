import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/user-list">User List</Link></li>
        </ul>
    );
};

export default Sidebar;
