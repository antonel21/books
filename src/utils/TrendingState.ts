import { iBook } from './iBook';

export interface TrendingState {
  trendingBooks: iBook[];
  pageNumberTrending: number;
  isLoading: boolean;
}
