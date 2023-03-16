import {
  FETCH_TRENDING_BOOKS,
  SET_IS_LOADING,
  SET_SEARCH_VALUE,
  SET_PAGE_NUMBER,
} from '../../constants/actionTypes'
import { AnyAction } from 'redux'

const initialState = {
  trendingBooks: [],
  isLoading: true,
  search: '',
  pageNumber: 1,
}

const pokemonsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_TRENDING_BOOKS:
      return { ...state, trendingBooks: action.payload }
    //if this action type is triggered we change the search string
    case SET_SEARCH_VALUE:
      return { ...state, search: action.payload }
    //if this action type is triggered take the loading state
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload }
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: action.payload }
    //if none of this action types is triggered we return the state
    default:
      return state
  }
}

export default pokemonsReducer
