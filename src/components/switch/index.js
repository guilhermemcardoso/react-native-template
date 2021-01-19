import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import * as dimens from '~/styles/dimens';

const StyledSwitch = ({ value, setValue }) => {
  const theme = useContext(ThemeContext);

  return (
    <Switch
      style={{ marginHorizontal: dimens.padding_large }}
      value={value}
      onValueChange={setValue}
      trackColor={{ false: theme.PLACEHOLDER_COLOR, true: theme.PLACEHOLDER_COLOR }}
      thumbColor={value ? theme.BOTTOM_NAVIGATION_ACTIVE_ITEM_COLOR : theme.BOTTOM_NAVIGATION_INACTIVE_ITEM_COLOR}
    />
  );
};

StyledSwitch.propTypes = {
  value: PropTypes.bool,
  setValue: PropTypes.func,
};

StyledSwitch.defaultProps = {
  value: false,
};

export default StyledSwitch;
