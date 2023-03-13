import {
  FETCH_TRENDING_BOOKS,
  SET_IS_LOADING,
  SEARCH_BOOKS_BY_NAME,
} from '../../constants/actionTypes';
import { AnyAction } from 'redux';

const initialState = {
  trendingBooks: [],
  isLoading: true,
  searchedByName: [],
};

const pokemonsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_TRENDING_BOOKS:
      return { ...state, trendingBooks: action.payload };
    //if this action type is triggered we change the search string
    case SEARCH_BOOKS_BY_NAME:
      return { ...state, searchedByName: action.payload };
    //if this action type is triggered take the loading state
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    //if none of this action types is triggered we return the state
    default:
      return state;
  }
};

export default pokemonsReducer;
