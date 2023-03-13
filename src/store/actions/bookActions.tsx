import {
  SEARCH_BOOKS_BY_NAME,
  FETCH_TRENDING_BOOKS,
  SET_IS_LOADING,
} from '../../constants/actionTypes';

//action to save the trending books in state
export const fetchTrendingBooks = (books: any[]) => {
  return { type: FETCH_TRENDING_BOOKS, payload: books };
};

export const searchPokemonByName = (book: string) => {
  return { type: SEARCH_BOOKS_BY_NAME, payload: book };
};

export const setIsLoading = (isLoading: boolean) => {
  return { type: SET_IS_LOADING, payload: isLoading };
};
