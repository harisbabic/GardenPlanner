// client/src/redux/reducers/rootReducer.js

import { combineReducers } from 'redux';
import plantReducer from './plantReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
    plants: plantReducer,
    theme: themeReducer,
    // Add other reducers here if you have them
});

export default rootReducer;
