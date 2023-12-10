

import { createStore } from 'redux';
import rootReducer from '../reducers.js/reducer';

// Create store
const store = createStore(rootReducer);

export default store;
