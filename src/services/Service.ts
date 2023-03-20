import booksApi from './booksApi';
import { TrendingProps, SearchProps } from './iService';

class Service {
  async fetchTrendingBooks(props: TrendingProps) {
    try {
      const { data } = await booksApi.get(
        `/trending/monthly.json?page=${props.pageNumberTrending}&limit=20`,
      );
      props.setTrendingBooks(data.works);
      props.setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchSearchedBooks(props: SearchProps) {
    try {
      const { data } = await booksApi.get(
        `/search.json?q=${props.search}&limit=10&page=${props.pageNumberSearching}`,
      );
      props.setSearchedBooks(data.docs);
      props.setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
}
const service = new Service();
export default service;
