import React, { Component } from 'react';
import PrimaryCard from '../components/cards/PrimaryCard';
import './Trending.scss';
import Label from '../components/label/Label';
import { connect } from 'react-redux';
import service from '../services/Service';
import {
  setIsLoading,
  setPageNumberTrending,
  setTrendingBooks,
} from '../store/actions/bookActions';
import { Dispatch } from 'redux';
import Loading from '../components/loading/Loading';
import Pagination from '@mui/material/Pagination';
import { iBook } from '../utils/iBook';

interface TrendingProps {
  setTrendingBooks: (payload: any[]) => void;
  setIsLoading: (payload: boolean) => void;
  setPageNumberTrending: (pageNumber: number) => void;
  pageNumberTrending: number;
  trendingBooks: [];
  isLoading: boolean;
}

class Trending extends Component<TrendingProps> {
  componentDidMount(): void {
    service.fetchTrendingBooks(this.props);
  }

  componentDidUpdate(prevProps: Readonly<TrendingProps>): void {
    if (prevProps.pageNumberTrending !== this.props.pageNumberTrending) {
      service.fetchTrendingBooks(this.props);
      this.props.setIsLoading(true);
    }
  }
  render() {
    return (
      <>
        <Label class="page-desc" labelText="Trending Books" />
        {this.props.isLoading ? (
          <Loading />
        ) : (
          <div className="trending-container">
            {this.props.trendingBooks.map((book: iBook, index: number) => (
              <PrimaryCard book={book} key={index} class="card-container" />
            ))}
          </div>
        )}
        <Pagination
          onChange={(e, page) => this.props.setPageNumberTrending(page)}
          className="pagination"
          count={10}
          color="primary"
          shape="rounded"
          page={this.props.pageNumberTrending}
        />
      </>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    isLoading: state.trendigReducer.isLoading,
    trendingBooks: state.trendigReducer.trendingBooks,
    pageNumberTrending: state.trendigReducer.pageNumberTrending,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setIsLoading: (payload: boolean) => dispatch(setIsLoading(payload)),
    setTrendingBooks: (payload: any[]) => dispatch(setTrendingBooks(payload)),
    setPageNumberTrending: (pageNumber: number) =>
      dispatch(setPageNumberTrending(pageNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
