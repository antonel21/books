import React, { Component } from 'react';
import SingleCard from '../components/cards/SingleCard';
import { connect } from 'react-redux';
import { RootState } from '..';
import { Dispatch } from 'redux';
import { setIsLoading, setRandomBook } from '../store/actions/bookActions';
import { iBook } from '../utils/iBook';
import Loading from '../components/loading/Loading';
import service from '../services/Service';

interface RandomBookProps {
  setRandomBook: (book: iBook) => void;
  setIsLoading: (payload: boolean) => void;
  randomBook: any
  isLoading: boolean;
}

export class RandomBook extends Component<RandomBookProps> {
  componentDidMount(): void {
    this.props.setIsLoading(true);
    service.fetchRandomBook(this.props);
  }
  render() {
    console.log(this.props.randomBook);
    
    return (
      <>
      {this.props.isLoading ? (
        <Loading />
      ) : (
      <div className="results-container2">
        <SingleCard book={this.props.randomBook} class="card-container2" />
      </div>
      )}
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    randomBook: state.singleBook.randomBook,
    isLoading: state.trendigReducer.isLoading,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setIsLoading: (payload: boolean) => dispatch(setIsLoading(payload)),
    setRandomBook: (book: iBook) => dispatch(setRandomBook(book)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RandomBook);
