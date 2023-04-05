import { iBook } from './iBook';

export interface SingleBookState {
  randomBook?: iBook;
  isLoading: boolean;
}
