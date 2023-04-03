import React, { Component } from 'react';
import { iBook } from '../../utils/iBook';
import CardDetails from '../details/cardDetails/CardDetails';
import Header from '../headers/Header';
import './SecondaryCard.scss';

interface SecondaryCardProps {
  class: string;
  book: iBook;
}

export class SecondaryCard extends Component<SecondaryCardProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Header book={this.props.book} class="card-header" />
        <CardDetails book={this.props.book} class="card-details" />
      </div>
    );
  }
}

export default SecondaryCard;
