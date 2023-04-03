import { combineReducers } from 'redux';

import { trendigReducer, searchReducer, singleBook } from './bookReducers';

//adding all reducers in a combine reducer

export default combineReducers({ trendigReducer, searchReducer , singleBook});
