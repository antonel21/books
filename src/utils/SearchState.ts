import { iBook } from './iBook';

export interface SearchState {
  search: string;
  isLoading: boolean;
  searchedBooks: iBook[];
  pageNumberSearching: number;
}
