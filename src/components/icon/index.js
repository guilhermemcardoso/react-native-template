import React, {useContext} from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from 'styled-components/native';

const StyledIcon = ({ name, size, color, ...rest }) => {
  const theme = useContext(ThemeContext);
  return <Icon name={Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`} size={size} color={color.length > 0 ? color : theme.PRIMARY_BUTTON_COLOR} />;
};

StyledIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

StyledIcon.defaultProps = {
  color: '',
  size: 16,
};

export default StyledIcon;
