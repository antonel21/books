import { iBook } from '../utils/iBook';
import booksApi from './booksApi';
import { TrendingProps, SearchProps } from './iService';

class Service {
  async fetchTrendingBooks(props: TrendingProps) {
    try {
      const books: iBook[] = [];
      const { data } = await booksApi.get(
        `/trending/monthly.json?page=${props.pageNumberTrending}&limit=20`,
      );
      data.works.map((book: iBook) => {
        return books.push({
          author_name: book.author_name,
          cover_i: book.cover_i,
          edition_count: book.edition_count,
          first_publish_year: book.first_publish_year,
          title: book.title,
          ratings_average: book.ratings_average,
        });
      });
      props.setTrendingBooks(books);
      props.setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchSearchedBooks(props: SearchProps) {
    try {
      const books: iBook[] = [];
      const { data } = await booksApi.get(
        `/search.json?q=${props.search}&limit=10&page=${props.pageNumberSearching}`,
      );
      data.docs.map((book: iBook) => {
        return books.push({
          author_name: book.author_name,
          cover_i: book.cover_i,
          edition_count: book.edition_count,
          first_publish_year: book.first_publish_year,
          title: book.title,
          ratings_average: book.ratings_average,
        });
      });
      props.setSearchedBooks(books);
      props.setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
}
const service = new Service();
export default service;
