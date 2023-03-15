import React, { Component } from 'react';

interface LabelProps {
  class: string;
  labelText: string;
}

export class Label extends Component<LabelProps> {
  render() {
    return <div className={this.props.class}>{this.props.labelText}</div>;
  }
}

export default Label;
