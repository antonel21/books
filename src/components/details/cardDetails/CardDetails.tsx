import React, { Component } from 'react';
import { iBook } from '../../../utils/iBook';
import CartInteract from '../../cartInteract/CartInteract';
import SecondaryDescription from '../../descriptions/SecondaryDescription';
import Thumbnail from '../../thumbnail/Thumbnail';
import './CardDetails.scss';

interface CardDetailsProps {
  class: string;
  book: iBook;
}

export class CardDetails extends Component<CardDetailsProps> {
  render() {
    return (
      <div className={this.props.class}>
        {this.props.book.cover_i ? (
          <Thumbnail
            class="card-img1"
            alt="book"
            src={`https://covers.openlibrary.org/b/id/${this.props.book.cover_i}-M.jpg`}
          />
        ) : (
          <Thumbnail
            class="card-img1"
            alt="book"
            src="https://www.press.uillinois.edu/books/images/no_cover.jpg"
          />
        )}
        <SecondaryDescription class="description" book={this.props.book} />
        <CartInteract class="card-interact" />
      </div>
    );
  }
}

export default CardDetails;
