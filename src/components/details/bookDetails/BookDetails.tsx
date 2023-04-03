import { Rating } from '@mui/material';
import React, { Component } from 'react';
import Caption from '../../caption/Caption';
import { iBook } from '../../../utils/iBook';

interface BookDetailsProps {
  class: string;
  book: iBook;
}

export class BookDetails extends Component<BookDetailsProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Rating />
        <Caption class="book-genere" title="lodjsflkadshjfasd" />
        <Caption class="book-desc" title="sadadsadfafsfasfsaf" />
      </div>
    );
  }
}

export default BookDetails;
