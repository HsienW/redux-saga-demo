import {createStore, applyMiddleware} from 'redux';
import rootSaga from './redux-root-saga';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './counter/counter-reducer';

const sagaMiddleware = createSagaMiddleware();
const ReduxStore = createStore(counterReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default ReduxStore;
