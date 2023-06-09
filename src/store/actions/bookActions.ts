import {
  SET_SEARCH_VALUE,
  SET_TRENDING_BOOKS,
  SET_IS_LOADING,
  SET_PAGE_NUMBER_TRENDING,
  SET_SEARCHED_BOOKS,
  SET_PAGE_NUMBER_SEARCHING,
  SET_RANDOM_BOOK,
  SET_USER_DATA,
  REMOVE_USER_DATA,
  SET_TO_CART,
  SET_TO_FAVORITE,
  REMOVE_FROM_FAVOURITES,
  REMOVE_FROM_CART,
} from '../../constants/actionTypes';
import { iBook } from '../../utils/iBook';
import { iUser } from '../../utils/iUser';

export const setTrendingBooks = (books: iBook[]) => {
  return { type: SET_TRENDING_BOOKS, payload: books };
};

export const setIsLoading = (isLoading: boolean) => {
  return { type: SET_IS_LOADING, payload: isLoading };
};

export const setPageNumberTrending = (pageNumber: number) => {
  return { type: SET_PAGE_NUMBER_TRENDING, payload: pageNumber };
};

export const setSearchedBooks = (books: iBook[]) => {
  return { type: SET_SEARCHED_BOOKS, payload: books };
};

export const setPageNumberSearching = (pageNumber: number) => {
  return { type: SET_PAGE_NUMBER_SEARCHING, payload: pageNumber };
};

export const setSearchValue = (search: string) => {
  return { type: SET_SEARCH_VALUE, payload: search };
};

export const setRandomBook = (book: iBook) => {
  return { type: SET_RANDOM_BOOK, payload: book };
};

export const setUserData = (data: iUser) => {
  return { type: SET_USER_DATA, payload: data };
};

export const removeUserData = () => {
  return { type: REMOVE_USER_DATA };
};

export const setToCart = (data: string) => {
  return { type: SET_TO_CART, payload: data };
};

export const setToFavorite = (data: string) => {
  return { type: SET_TO_FAVORITE, payload: data };
};

export const removeFromCart = (book: string) => {
  return { type: REMOVE_FROM_CART, payload: book };
};

export const removeFromFavorites = (book: string) => {
  return { type: REMOVE_FROM_FAVOURITES, payload: book };
};
