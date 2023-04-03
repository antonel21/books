import React, { Component } from 'react';
import Button from './Button';
import './TwoButtons.scss'
import { iBook } from '../../utils/iBook';

interface TwoButtonsProps {
  class: string;
  book: iBook;
}

export class TwoButtons extends Component<TwoButtonsProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Button class="btn-add" handleClick={() => {}} label='Add To Cart' />
        <Button class="btn-buy1" handleClick={() => {}} label='Buy Now' />
      </div>
    );
  }
}

export default TwoButtons;
