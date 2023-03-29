import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Logo } from './Logo';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Logo', () => {
  it('renders without crashing', () => {
    shallow(<Logo />);
  });

  it('renders an image with the correct source and alt text', () => {
    const wrapper = shallow(<Logo />);
    const img = wrapper.find('img');
    expect(img.prop('src')).toEqual(
      'https://www.transparentpng.com/thumb/books/blue-book-png-icon--an1pZY.png',
    );
    expect(img.prop('alt')).toEqual('books');
  });

  it('renders a NavLink with the correct to prop', () => {
    const wrapper = shallow(<Logo />);
    const navLink = wrapper.find('NavLink');
    expect(navLink.prop('to')).toEqual('/');
  });
});
