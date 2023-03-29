import React, { Component } from 'react';
import TwoButtons from '../buttons/TwoButtons';
import BookDetails from '../details/bookDetails/BookDetails';
import SingleHeader from '../header/SingleHeader';

interface SingleCardDescProps {
  class: string;
}

export class SingleCardDesc extends Component<SingleCardDescProps> {
  render() {
    return (
      <div className={this.props.class}>
        <SingleHeader class="" />
        <BookDetails class="" />
        <TwoButtons class="" />
      </div>
    );
  }
}

export default SingleCardDesc;
