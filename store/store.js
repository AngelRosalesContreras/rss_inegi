import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { newsReducer } from './reducer';

export const store = createStore(newsReducer, applyMiddleware(thunk));
