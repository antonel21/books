import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Footer component', () => {
  test('renders footer text', () => {
    render(<Footer />);
    const footer = screen.getByText(/© 2023/);
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent(
      '© 2023 Copyright Antonel Alimucaj | All Rights Reseved',
    );
  });
});
