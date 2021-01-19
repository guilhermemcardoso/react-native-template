import React, {useContext} from 'react';
import { ThemeContext } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { TouchableOpacity, Label } from './styles';

const Button = ({ title, margin, loading, disabled, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      margin={margin}
      disabled={disabled}
      {...rest}
    >
      {loading ? <ActivityIndicator color={theme.PRIMARY_TEXT_COLOR} /> : <Label>{title}</Label>}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  margin: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};

Button.defaultProps = {
  label: '',
  margin: true,
  disabled: false,
  loading: false
};

export default Button;
