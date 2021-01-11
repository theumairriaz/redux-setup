import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';

const store = createStore(combineReducers({
    ...reducers
}), applyMiddleware(thunk));

export { store };