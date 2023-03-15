import React, { Component } from 'react';

interface CaptionProps {
  title: string;
  class: string;
}

class Caption extends Component<CaptionProps> {
  render() {
    return <h3 className={this.props.class}>{this.props.title}</h3>;
  }
}

export default Caption;
