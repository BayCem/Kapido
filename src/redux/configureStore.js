import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
//import thunk from 'redux-thunk';
//import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './modules';

export const history = createBrowserHistory();

const configureStore = (preLoadState) => {
  const middlewares = [thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }

  const composed = [applyMiddleware(...middlewares)];

  if (process.env.NODE_ENV === 'development') {
    composed.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    rootReducer(history),
    preLoadState,
    compose(applyMiddleware(routerMiddleware(history))),
  );

  return store;
};

export default configureStore;
