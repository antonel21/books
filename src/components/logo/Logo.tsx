import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Logo extends Component {
  render() {
    return (
      <NavLink to="/">
        <img
          style={{ width: '70px', height: '70px', padding: '10px 0px' }}
          src="https://www.transparentpng.com/thumb/books/blue-book-png-icon--an1pZY.png"
          alt="books"
        />
      </NavLink>
    );
  }
}

export default Logo;
