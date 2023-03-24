import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from './Logo';
import '@testing-library/jest-dom';

describe('Logo component', () => {
  it('should render a NavLink with the correct props and image', () => {
    render(
      <Router>
        <Logo />
      </Router>,
    );

    const navLink = screen.getByRole('link');
    const img = screen.getByAltText('books');

    expect(navLink).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      'src',
      'https://www.transparentpng.com/thumb/books/blue-book-png-icon--an1pZY.png',
    );
    expect(img).toHaveAttribute('alt', 'books');
    expect(img).toHaveStyle('width: 70px; height: 70px; padding: 10px 0px;');
  });
});
