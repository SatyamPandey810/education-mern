import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import userReducer from './slices/userSlice';
import userSaga from '../saga/user.saga';
import userReducer from '../reducers/user.reducer';
import rootReducers from '../reducers/rootReducres';
import { root } from '../saga/rootSaga';
// import userSaga from './sagas/userSaga'; 

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(root);

export default Store;
