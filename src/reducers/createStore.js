import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from "redux-saga";

import rootReducer from './rootReducer'
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware),);
    sagaMiddleware.run(rootSaga);
    return store;
};

export default store();
