import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from '../../components/footerComponent/Footer';

configure({ adapter: new Adapter() });
it('renders coorectly', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
