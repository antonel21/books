import { combineReducers } from 'redux'

import { trendigReducer, searchReducer } from './bookReducers'

//adding all reducers in a combine reducer

export default combineReducers({ trendigReducer, searchReducer })
