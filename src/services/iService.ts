import { iBook } from '../utils/iBook';

export interface TrendingProps {
  pageNumberTrending: number;
  setTrendingBooks: (books: iBook[]) => void;
  setIsLoading: (payload: boolean) => void;
}

export interface SearchProps {
  pageNumberSearching: number;
  search: string;
  setIsLoading: (payload: boolean) => void;
  setSearchedBooks: (books: iBook[]) => void;
}
