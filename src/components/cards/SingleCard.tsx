import React, { Component } from 'react';
import { iBook } from '../../utils/iBook';
import SingleCardDesc from '../descriptions/SingleCardDesc';
import Thumbnail from '../thumbnail/Thumbnail';
import './SingleCard.scss'

interface SingleCardProps {
  class: string;
  book: iBook;
}

export class SingleCard extends Component<SingleCardProps> {
  
  render() {
    console.log(this.props.book, 'single');
    
    return (
      <div className={this.props.class}>
        {this.props.book.cover_i ? (
          <Thumbnail
            class="card-img2"
            alt="book"
            src={`https://covers.openlibrary.org/b/id/${this.props.book.cover_i}-M.jpg`}
          />
        ) : (
          <Thumbnail
            class="card-img2"
            alt="book"
            src="https://www.press.uillinois.edu/books/images/no_cover.jpg"
          />
        )}
        <SingleCardDesc class="single-card-desc" book={this.props.book} />
      </div>
    );
  }
}

export default SingleCard;
