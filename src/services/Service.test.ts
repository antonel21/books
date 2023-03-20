import Service from './Service';
import booksApi from './booksApi';

jest.mock('./booksApi');

const mockedAxios = booksApi.get as jest.MockedFunction<typeof booksApi.get>;

describe('Testing service...', () => {
  const data = {
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
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Testing fetchTrendingBooks', () => {
    const props = {
      pageNumberTrending: 1,
      setTrendingBooks: jest.fn(),
      setIsLoading: jest.fn(),
    };
    it('should fetch trending books and set the result and isLoading state', async () => {
      mockedAxios.mockResolvedValueOnce({ data });
      await Service.fetchTrendingBooks(props);
      expect(mockedAxios).toHaveBeenCalledWith(
        `/trending/monthly.json?page=${props.pageNumberTrending}&limit=20`,
      );
      expect(mockedAxios).toHaveBeenCalledTimes(1);
      expect(props.setTrendingBooks).toHaveBeenCalledWith(data.works);
      expect(props.setIsLoading).toHaveBeenCalledWith(false);
    });
  });
});
