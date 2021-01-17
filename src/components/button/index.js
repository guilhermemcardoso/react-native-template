import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, Label } from './styles';

const Button = ({ title, margin, disabled, ...rest }) => {
  return (
    <TouchableOpacity
      margin={margin}
      disabled={disabled}
      {...rest}
    >
      <Label>{title}</Label>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  margin: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  label: '',
  margin: false,
  disabled: false,
};

export default Button;
