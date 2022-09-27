// import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//     // reducer,
//     applyMiddleware(sagaMiddleware)
//   )


//   export default store;

import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
// import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootreducer';


// multiple reducer access
const store = createStore(rootReducer,applyMiddleware(logger,thunk))


export default store;