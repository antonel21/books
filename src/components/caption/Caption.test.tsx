import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Caption from './Caption';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Caption', () => {
  it('renders the title prop as text', () => {
    const title = 'Test Title';
    const wrapper = shallow(<Caption title={title} class="test-class" />);
    expect(wrapper.text()).toBe(title);
  });

  it('renders with the class prop', () => {
    const title = 'Test Title';
    const className = 'test-class';
    const wrapper = shallow(<Caption title={title} class={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });
});
