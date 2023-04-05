import {
  SET_SEARCHED_BOOKS,
  SET_TRENDING_BOOKS,
  SET_IS_LOADING,
  SET_SEARCH_VALUE,
  SET_PAGE_NUMBER_TRENDING,
  SET_PAGE_NUMBER_SEARCHING,
  SET_RANDOM_BOOK,
  SET_USER_DATA,
  REMOVE_USER_DATA,
  SET_TO_CART,
  SET_TO_FAVORITE,
  REMOVE_FROM_FAVOURITES,
  REMOVE_FROM_CART,
} from '../../constants/actionTypes';
import { AnyAction } from 'redux';
import { SearchState } from '../../utils/SearchState';
import { TrendingState } from '../../utils/TrendingState';
import { SingleBookState } from '../../utils/SingleBookState';
import { AuthState } from '../../utils/AuthState';

const initialStateTrending: TrendingState = {
  trendingBooks: [],
  isLoading: true,
  pageNumberTrending: 1,
};

const trendigReducer = (state = initialStateTrending, action: AnyAction) => {
  switch (action.type) {
    case SET_TRENDING_BOOKS:
      return { ...state, trendingBooks: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_PAGE_NUMBER_TRENDING:
      return { ...state, pageNumberTrending: action.payload };
    default:
      return state;
  }
};

const initialStateSearch: SearchState = {
  isLoading: true,
  search: '',
  searchedBooks: [],
  pageNumberSearching: 1,
};

const initialStateAuth: AuthState = {
  isLoading: true,
  user: undefined,
};
const auth = (state = initialStateAuth, action: AnyAction) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_USER_DATA:
      return { ...state, user: action.payload };
    case REMOVE_USER_DATA:
      return { ...state, user: undefined };
    case SET_TO_CART:
      return {
        ...state,
        user: {
          ...state.user,
          cart: state.user?.cart
            ? [...state.user?.cart, action.payload]
            : [action.payload],
        },
      };
    case SET_TO_FAVORITE:
      return {
        ...state,
        user: {
          ...state.user,
          favorites: state.user?.favorites
            ? [...state.user?.favorites, action.payload]
            : [action.payload],
        },
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        user: {
          ...state.user,
          favorites: state.user?.favorites?.filter(
            (book: any) => book.key !== action.payload,
          ),
        },
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        user: {
          ...state.user,
          cart: state.user?.cart?.filter(
            (book: any) => book.key !== action.payload,
          ),
        },
      };
    default:
      return state;
  }
};

const searchReducer = (state = initialStateSearch, action: AnyAction) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return { ...state, search: action.payload };
    case SET_SEARCHED_BOOKS:
      return { ...state, searchedBooks: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_PAGE_NUMBER_SEARCHING:
      return { ...state, pageNumberSearching: action.payload };
    default:
      return state;
  }
};

const initialStateSingleBook: SingleBookState = {
  isLoading: true,
  randomBook: undefined,
};

const singleBook = (state = initialStateSingleBook, action: AnyAction) => {
  switch (action.type) {
    case SET_RANDOM_BOOK:
      return { ...state, randomBook: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export { trendigReducer, searchReducer, singleBook, auth };
