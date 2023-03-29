import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Label } from './Label';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Label', () => {
  it('renders without crashing', () => {
    shallow(<Label class="test-class" labelText="Test label" />);
  });

  it('renders a div with the correct class and text', () => {
    const wrapper = shallow(
      <Label class="test-class" labelText="Test label" />,
    );
    expect(wrapper.find('div').hasClass('test-class')).toEqual(true);
    expect(wrapper.find('div').text()).toEqual('Test label');
  });
});
