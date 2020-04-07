import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './case/counter/counter';
import ReduxStore from './redux/redux-store';
import * as serviceWorker from './common/serviceWorker';
import './style/index.css';

const action = type => ReduxStore.dispatch({type});

ReactDOM.render(
    <Counter
        value={ReduxStore.getState()}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
    />
    , document.getElementById('root'));
serviceWorker.unregister();
