import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './case/counter/counter';
import ReduxStore from './redux/redux-store';
import {Provider} from 'react-redux';
import * as serviceWorker from './common/serviceWorker';
import './style/index.css';

ReactDOM.render(
    <Provider store={ReduxStore}>
        <Counter/>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
