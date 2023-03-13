import { combineReducers } from 'redux';

import home from './bookReducers';

//adding all reducers in a combine reducer

export default combineReducers({ home });
