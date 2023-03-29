import React, { Component } from 'react';
import Caption from '../caption/Caption';

interface SingleHeaderProps {
  class: string;
}

export class SingleHeader extends Component<SingleHeaderProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Caption class="book-title" title="" />
        <Caption class="book-author" title="" />
      </div>
    );
  }
}

export default SingleHeader;
