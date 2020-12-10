import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from '../../routes/Home';

configure({ adapter: new Adapter() });
it('renders coorectly', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
