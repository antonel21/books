import { Rating } from '@mui/material';
import React, { Component } from 'react';
import Caption from '../../caption/Caption';

interface BookDetailsProps {
  class: string;
}

export class BookDetails extends Component<BookDetailsProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Rating />
        <Caption class="book-genere" title="" />
        <Caption class="book-desc" title="" />
      </div>
    );
  }
}

export default BookDetails;
