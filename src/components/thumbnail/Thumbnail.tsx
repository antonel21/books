import React, { Component } from 'react';

interface ThumbnailProps {
  src: any;
  alt: string;
  class: string;
}

class Thumbnail extends Component<ThumbnailProps> {
  render() {
    return (
      <img
        className={this.props.class}
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  }
}

export default Thumbnail;
