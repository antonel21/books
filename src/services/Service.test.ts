import Service from './Service';
import booksApi from './booksApi';
import { iBook } from '../utils/iBook';

jest.mock('./booksApi');

const mockedAxios = booksApi as jest.Mocked<typeof booksApi>;

describe('Testing service...', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const data: { works: iBook[] } = {
    works: [
      {
        cover_i: 343434,
        author_name: 'J.K.Rowling',
        title: 'Harry Potter',
        first_publish_year: 2008,
        edition_count: 39,
      },
      {
        cover_i: 12345,
        author_name: 'Charles Dickens',
        title: 'Oliver Twist',
        first_publish_year: 1982,
        edition_count: 345,
      },
    ],
  };

  const fetchBooks = async () => {
    try {
      return await booksApi.get(`/trending/monthly.json?page=1&limit=20`);
    } catch (e) {
      return [];
    }
  };

  describe('Testing fetchTrendingBooks', () => {
    it('should fetch trending books and test data returned', async () => {
      mockedAxios.get.mockResolvedValueOnce(data);
      const result = await fetchBooks();
      expect(mockedAxios.get).toHaveBeenCalledWith(
        `/trending/monthly.json?page=1&limit=20`,
      );
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(result).toEqual(data);
    });

    it('should fetch trending books and set the trendingBooks and isLoading state', async () => {
      const props = {
        pageNumberTrending: 1,
        setTrendingBooks: jest.fn(),
        setIsLoading: jest.fn(),
      };
      mockedAxios.get.mockResolvedValueOnce({ data });
      await Service.fetchTrendingBooks(props);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        `/trending/monthly.json?page=${props.pageNumberTrending}&limit=20`,
      );
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(props.setTrendingBooks).toHaveBeenCalledWith(data.works);
      expect(props.setIsLoading).toHaveBeenCalledWith(false);
    });
  });

  describe('When API call fails', () => {
    it('should return empty books list', async () => {
      const message = 'Network Error';
      mockedAxios.get.mockRejectedValueOnce(new Error(message));
      const result = await fetchBooks();
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
    });
  });
});
