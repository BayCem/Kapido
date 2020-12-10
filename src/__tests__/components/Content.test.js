import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from '../../components/ContentComponent/Content';

configure({ adapter: new Adapter() });
it('renders coorectly', () => {
  const wrapper = shallow(
    <Content>
      <h1>Content</h1>
    </Content>,
  );
  expect(wrapper).toMatchSnapshot();
});
