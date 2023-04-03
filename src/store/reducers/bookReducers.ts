import {
  SET_SEARCHED_BOOKS,
  SET_TRENDING_BOOKS,
  SET_IS_LOADING,
  SET_SEARCH_VALUE,
  SET_PAGE_NUMBER_TRENDING,
  SET_PAGE_NUMBER_SEARCHING,
  SET_RANDOM_BOOK
} from '../../constants/actionTypes';
import { AnyAction } from 'redux';

const initialState = {
  trendingBooks: [],
  isLoading: true,
  search: '',
  pageNumberTrending: 1,
  searchedBooks: [],
  pageNumberSearching: 1,
  randomBook: {}
};

const trendigReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_TRENDING_BOOKS:
      return { ...state, trendingBooks: action.payload };
    //if this action type is triggered take the loading state
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_PAGE_NUMBER_TRENDING:
      return { ...state, pageNumberTrending: action.payload };
    //if none of this action types is triggered we return the state
    default:
      return state;
  }
};

const searchReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    //if this action type is triggered we change the search string
    case SET_SEARCH_VALUE:
      return { ...state, search: action.payload };
    case SET_SEARCHED_BOOKS:
      return { ...state, searchedBooks: action.payload };
    case SET_PAGE_NUMBER_SEARCHING:
      return { ...state, pageNumberSearching: action.payload };
    default:
      return state;
  }
}
  const singleBook = (state = initialState, action: AnyAction) => {
    switch (action.type) {
      case SET_RANDOM_BOOK:
        return { ...state, randomBook: action.payload };
      default:
        return state;
    }
};



export { trendigReducer, searchReducer , singleBook};
