import React, { Component } from 'react';
import './SearchResults.scss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SecondaryCard from '../components/cards/SecondaryCard';
import service from '../services/Service';
import {
  setIsLoading,
  setPageNumberSearching,
  setSearchedBooks,
  setSearchValue,
} from '../store/actions/bookActions';
import { Pagination } from '@mui/material';
import Label from '../components/label/Label';
import Loading from '../components/loading/Loading';
import { iBook } from '../utils/iBook';
import { RootState } from '..';

export interface SearchResultsProps {
  pageNumberSearching: number;
  search: string;
  searchedBooks: iBook[];
  isLoading: boolean;
  setSearchedBooks: (books: iBook[]) => void;
  setIsLoading: (payload: boolean) => void;
  setSearchValue: (search: string) => void;
  setPageNumberSearching: (pageNum: number) => void;
}

export class SearchResults extends Component<SearchResultsProps> {
  componentDidMount(): void {
    this.props.setIsLoading(true);
    service.fetchSearchedBooks(this.props);
  }
  componentDidUpdate(prevProps: Readonly<SearchResultsProps>): void {
    if (
      this.props.search.length > 2 &&
      prevProps.search.length !== this.props.search.length
    ) {
      this.props.setIsLoading(true);
      service.fetchSearchedBooks(this.props);
    }
    if (prevProps.pageNumberSearching !== this.props.pageNumberSearching) {
      this.props.setIsLoading(true);
      service.fetchSearchedBooks(this.props);
    }
  }
  render() {
    return (
      <>
        <Label class="page-desc" labelText="Search Results" />
        {this.props.isLoading ? (
          <Loading />
        ) : (
          <div className="results-container1">
            {this.props.searchedBooks.map((book: iBook, index: number) => (
              <SecondaryCard book={book} key={index} class="card-container1" />
            ))}
          </div>
        )}
        <Pagination
          onChange={(e, page) => this.props.setPageNumberSearching(page)}
          className="pagination1"
          count={10}
          shape="rounded"
          color="primary"
        />
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    isLoading: state.trendigReducer.isLoading,
    search: state.searchReducer.search,
    searchedBooks: state.searchReducer.searchedBooks,
    pageNumberSearching: state.searchReducer.pageNumberSearching,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setIsLoading: (payload: boolean) => dispatch(setIsLoading(payload)),
    setPageNumberSearching: (pageNum: number) =>
      dispatch(setPageNumberSearching(pageNum)),
    setSearchedBooks: (books: iBook[]) => dispatch(setSearchedBooks(books)),
    setSearchValue: (search: string) => dispatch(setSearchValue(search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
