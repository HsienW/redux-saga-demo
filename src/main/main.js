import React from 'react'
import {Switch, Route, Link} from 'react-router-dom';
import {Home, Counter, UserList, Auth} from '../containers';

const Main = () => (
    <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/user-list">User List</Link></li>
        </ul>
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/home" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/user-list" component={UserList} />
        </Switch>
    </div>
);


export default Main
