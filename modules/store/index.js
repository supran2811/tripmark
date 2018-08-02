import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  // The DEVTOOLS stuff will enable the redux devtools in Chrome
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

    const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

    const store = createStore(rootReducer, initialState, enhancer);
  
    store.runSagaTask = () => {
      store.sagaTask = sagaMiddleware.run(rootSaga)
    }

    // run the rootSaga initially
    store.runSagaTask();
  
    return store;
}