import React from 'react';
import PropTypes from 'prop-types';
import Switch from '~/components/switch';
import {Container, Label} from './styles';

const SwitchTheme = ({ labels, value, setValue }) => {

  return (
    <Container>
      {labels.length > 0 && <Label>{labels[0]}</Label>}
      <Switch value={value} setValue={setValue} />
      {labels.length > 1 && <Label>{labels[1]}</Label>}
    </Container>
  );
};

SwitchTheme.propTypes = {
  labels: PropTypes.array,
  value: PropTypes.bool,
  setValue: PropTypes.func,
};

SwitchTheme.defaultProps = {
  labels: [],
  value: false,
};

export default SwitchTheme;
