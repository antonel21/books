import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import { SearchResults, SearchResultsProps } from './SearchResults';
import Label from '../components/label/Label';
import Loading from '../components/loading/Loading';
import SecondaryCard from '../components/cards/SecondaryCard';
import { Pagination } from '@mui/material';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });


describe('SearchResults', () => {
  let props: SearchResultsProps;
  let wrapper: any;

  beforeEach(() => {
    props = {
      pageNumberSearching: 1,
      search: 'test',
      searchedBooks: [
        {
          author_name: 'Author',
          title: 'Book Title',
          cover_i: 123,
          first_publish_year: 2021,
          edition_count: 1,
          ratings_average: 4.5,
          key: 'abc123',
        },
      ],
      isLoading: false,
      setSearchedBooks: jest.fn(),
      setIsLoading: jest.fn(),
      setSearchValue: jest.fn(),
      setPageNumberSearching: jest.fn(),
    };
    wrapper = shallow(<SearchResults {...props} />);
  });

  it('should render a Label component with "Search Results" as the labelText', () => {
    expect(wrapper.find(Label).prop('labelText')).toEqual('Search Results');
  });

  it('should render a Loading component when isLoading is true', () => {
    wrapper.setProps({ isLoading: true });
    expect(wrapper.find(Loading)).toHaveLength(1);
  });

  it('should render a Pagination component with count=10', () => {
    expect(wrapper.find(Pagination).prop('count')).toEqual(10);
  });

  it('should render a list of SecondaryCard components based on the searchedBooks prop', () => {
    expect(wrapper.find(SecondaryCard)).toHaveLength(1);
    expect(wrapper.find(SecondaryCard).prop('book')).toEqual(props.searchedBooks[0]);
  });

  it('should call setIsLoading and service.fetchSearchedBooks when the search prop changes', () => {
    wrapper.setProps({ search: 'new search' });
    expect(props.setIsLoading).toHaveBeenCalledWith(true);
  });

  it('should call setIsLoading and service.fetchSearchedBooks when the pageNumberSearching prop changes', () => {
    wrapper.setProps({ pageNumberSearching: 2 });
    expect(props.setIsLoading).toHaveBeenCalledWith(true);
  });
});