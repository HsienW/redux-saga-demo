import {createStore, applyMiddleware} from 'redux';
import rootSaga from './redux-root-saga';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux-root-reducer';

const sagaMiddleware = createSagaMiddleware();
const ReduxStore = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default ReduxStore;
