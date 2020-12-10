import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Start from '../../routes/Start';

configure({ adapter: new Adapter() });
it('renders coorectly', () => {
  const wrapper = shallow(<Start />);
  expect(wrapper).toMatchSnapshot();
});
