import React from 'react';
import { storiesOf } from '@storybook/react';

import BlueRoundedButton from './button';

storiesOf('Button', module).add('Rounded Blue', () => (
  <BlueRoundedButton label="Sign Up" className="blue-button" />
));
