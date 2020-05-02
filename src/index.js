import React from 'react';
import ReactDOM from 'react-dom';
import ReduxStore from './redux/redux-store';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import Main from './main/main';

ReactDOM.render(
    <Provider store={ReduxStore}>
        <HashRouter>
            <Main/>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
