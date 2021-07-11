import { createStore, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const composedEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(
    reducers
);
