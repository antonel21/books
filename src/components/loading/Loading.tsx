import React, { Component } from 'react';
import './Loading.scss';

class Loading extends Component {
  render() {
    return (
      <div className="spinner-container">
        <div className="spinner">
          <span className="spinner-inner-1"></span>
          <span className="spinner-inner-2"></span>
          <span className="spinner-inner-3"></span>
        </div>
      </div>
    );
  }
}

export default Loading;
