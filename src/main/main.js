import React from 'react'
import {Switch, Route, Link} from 'react-router-dom';
import Home from '../containers/home/home';
import Counter from '../containers/counter/counter';
import UserList from '../containers/user-list/user-list';

const Main = () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/user-list">User List</Link></li>
        </ul>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/user-list" component={UserList} />
        </Switch>
    </div>
);


export default Main
