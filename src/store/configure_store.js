import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import combineReducers from './combine_reducers';

export const configureStore = initialState =>
  createStore(
    combineReducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );