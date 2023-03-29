import React, { Component } from 'react';
import Button from './Button';

interface TwoButtonsProps {
  class: string;
}

export class TwoButtons extends Component<TwoButtonsProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Button class="btn-add" handleClick={() => {}} />
        <Button class="btn-buy" handleClick={() => {}} />
      </div>
    );
  }
}

export default TwoButtons;
