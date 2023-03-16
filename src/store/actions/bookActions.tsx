import {
  SET_SEARCH_VALUE,
  FETCH_TRENDING_BOOKS,
  SET_IS_LOADING,
  SET_PAGE_NUMBER,
} from '../../constants/actionTypes'

//action to save the trending books in state
export const fetchTrendingBooks = (books: any[]) => {
  return { type: FETCH_TRENDING_BOOKS, payload: books }
}

export const setSearchValue = (search: string) => {
  return { type: SET_SEARCH_VALUE, payload: search }
}

export const setIsLoading = (isLoading: boolean) => {
  return { type: SET_IS_LOADING, payload: isLoading }
}

export const setPageNumber = (pageNumber: number) => {
  return { type: SET_PAGE_NUMBER, payload: pageNumber }
}
