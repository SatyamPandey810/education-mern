import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers/rootReducres';
import { root } from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(root);

export default Store;
