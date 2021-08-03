import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerData from './reducers';

const store = createStore(reducerData, composeWithDevTools());

export default store;
