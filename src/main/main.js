import React from 'react'
import {Switch, Route} from 'react-router-dom';
import {Sidebar, Header, Footer} from '../layout';
import {Home, Counter, UserList, Auth} from '../containers';

const LayoutProvider = (props) => (
    <div>
        <Sidebar/>
        <Header/>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
        <Footer/>
    </div>
);

const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Auth}/>
            <LayoutProvider>
                <Route exact path="/home" component={Home}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/user-list" component={UserList}/>
            </LayoutProvider>
        </Switch>
    </div>
);


export default Main
