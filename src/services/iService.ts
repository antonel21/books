import { iBook } from "../utils/iBook";

export interface TrendingProps {
  pageNumberTrending?: number;
  setTrendingBooks?: any;
  setIsLoading?: any;
}

export interface SearchProps {
  pageNumberSearching?: number;
  search?: string;
  setIsLoading?: any;
  setSearchedBooks?: any;
}

export interface RandomBookProps{
  setIsLoading?: any;
  setRandomBook?: any,
  book?: iBook
}
