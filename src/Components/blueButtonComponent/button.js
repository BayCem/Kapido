import React from 'react';

import PropTypes from 'prop-types';

import '../../assets/css/button.min.css';

function Button({ label, className }) {
  return (
    <button type="button" className={className}>
      {label}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
