import {
  SET_SEARCH_VALUE,
  SET_TRENDING_BOOKS,
  SET_IS_LOADING,
  SET_PAGE_NUMBER_TRENDING,
  SET_SEARCHED_BOOKS,
  SET_PAGE_NUMBER_SEARCHING,
  SET_RANDOM_BOOK
} from '../../constants/actionTypes';
import { iBook } from '../../utils/iBook';

//action to save the trending books in state
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