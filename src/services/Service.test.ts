import Service from './Service';
import booksApi from './booksApi';
import { iBook } from '../utils/iBook';

jest.mock('./booksApi');

const mockedAxios = booksApi as jest.Mocked<typeof booksApi>;
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
const fetchBooks = async (url: string) => {
  try {
    const works: iBook[] = [];
    const { data } = await booksApi.get(url);
    data.works.map((item: iBook) => {
      return works.push({
        cover_i: item.cover_i,
        author_name: item.author_name.toUpperCase(),
        title: item.title,
        first_publish_year: item.first_publish_year,
        edition_count: item.edition_count - 10,
        ratings_average: item.ratings_average,
      });
    });
    return { works };
  } catch (e) {
    return { works: [] };
  }
};
const customError = (response: { works: iBook[] }) => {
  if (response.works.length === 0) {
    throw new Error('Network Error');
  }
};

const props = {
  pageNumberTrending: 1,
  setTrendingBooks: jest.fn(),
  setIsLoading: jest.fn(),
};

describe('Testing fetchBooks', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce({ data });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch trending books and test data returned', async () => {
    const result = await fetchBooks('/trending/monthly.json?page=1&limit=20');
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/trending/monthly.json?page=1&limit=20`,
    );
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result).not.toEqual(data);
    expect(result.works[0].author_name).toEqual(
      data.works[0].author_name.toUpperCase(),
    );
    expect(result.works[0].edition_count).toEqual(
      data.works[0].edition_count - 10,
    );
  });

  it('should fetch trending books and set the trendingBooks and isLoading state', async () => {
    await Service.fetchTrendingBooks(props);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/trending/monthly.json?page=${props.pageNumberTrending}&limit=20`,
    );
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(props.setTrendingBooks).toHaveBeenCalledWith(data.works);
    expect(props.setIsLoading).toHaveBeenCalledWith(false);
  });
});

let result: { works: iBook[] };
describe('Testing customError...', () => {
  beforeEach(async () => {
    mockedAxios.get.mockRejectedValueOnce({ data });
    result = await fetchBooks('/trending/monthly.json?page=1&limit=20');
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should return empty books list', () => {
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result.works).toEqual([]);
    expect(() => customError(result)).toThrow('Network Error');
  });
});
