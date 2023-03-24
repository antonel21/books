import {
  SET_SEARCH_VALUE,
  SET_TRENDING_BOOKS,
  SET_IS_LOADING,
  SET_PAGE_NUMBER_TRENDING,
  SET_SEARCHED_BOOKS,
  SET_PAGE_NUMBER_SEARCHING,
} from '../../constants/actionTypes';

//action to save the trending books in state
export const setTrendingBooks = (books: any[]) => {
  return { type: SET_TRENDING_BOOKS, payload: books };
};

export const setIsLoading = (isLoading: boolean) => {
  return { type: SET_IS_LOADING, payload: isLoading };
};

export const setPageNumberTrending = (pageNumber: number) => {
  return { type: SET_PAGE_NUMBER_TRENDING, payload: pageNumber };
};

export const setSearchedBooks = (books: any[]) => {
  return { type: SET_SEARCHED_BOOKS, payload: books };
};

export const setPageNumberSearching = (pageNumber: number) => {
  return { type: SET_PAGE_NUMBER_SEARCHING, payload: pageNumber };
};

export const setSearchValue = (search: string) => {
  return { type: SET_SEARCH_VALUE, payload: search };
};
