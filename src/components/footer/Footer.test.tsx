import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Footer } from './Footer';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders a footer with the correct class and text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').hasClass('footer')).toEqual(true);
    expect(wrapper.find('p').text()).toEqual(
      '© 2023 Copyright Antonel Alimucaj | All Rights Reseved',
    );
  });
});
