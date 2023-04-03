import React, { Component } from 'react';
import Caption from '../caption/Caption';
import { iBook } from '../../utils/iBook';

interface SingleHeaderProps {
  class: string;
  book: iBook;
}

export class SingleHeader extends Component<SingleHeaderProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Caption class="book-title" title="Harry potter test test test test" />
        <Caption class="book-author" title="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />
      </div>
    );
  }
}

export default SingleHeader;
