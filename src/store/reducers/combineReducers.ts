import { combineReducers } from 'redux';

import {
  trendigReducer,
  searchReducer,
  singleBook,
  auth,
} from './bookReducers';

//adding all reducers in a combine reducer

export default combineReducers({
  trendigReducer,
  searchReducer,
  singleBook,
  auth,
});
