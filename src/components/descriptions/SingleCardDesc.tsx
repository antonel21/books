import React, { Component } from 'react';
import TwoButtons from '../buttons/TwoButtons';
import BookDetails from '../details/bookDetails/BookDetails';
import SingleHeader from '../headers/SingleHeader';
import './SingleCardDesc.scss'
import { iBook } from '../../utils/iBook';

interface SingleCardDescProps {
  class: string;
  book: iBook;
}

export class SingleCardDesc extends Component<SingleCardDescProps> {
  render() {
    return (
      <div className={this.props.class}>
        <SingleHeader class="single-header" book={this.props.book} />
        <BookDetails class="book-details" book={this.props.book} />
        <TwoButtons class="two-buttons"  book={this.props.book}/>
      </div>
    );
  }
}

export default SingleCardDesc;
