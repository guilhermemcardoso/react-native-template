import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Container, ShowPassword } from './styles';
import { ThemeContext } from 'styled-components/native';
import Icon from '~/components/icon';

const TextInput = ({ password, onChangeText, error, margin, forwardRef, ...rest }) => {
  const theme = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      {password && (
        <ShowPassword onPress={() => setVisible(!visible)}>
          <Icon name={!visible ? 'eye-outline' : 'eye-off-outline'} />
        </ShowPassword>
      )}

      <Input
        ref={forwardRef}
        secureTextEntry={password && !visible}
        onChangeText={onChangeText}
        error={error}
        password={password}
        placeholderTextColor={theme.PLACEHOLDER_COLOR}
        {...rest}
      />
    </Container>
  );
};

TextInput.propTypes = {
  password: PropTypes.bool,
  onChangeText: PropTypes.func,
  error: PropTypes.bool,
  forwardRef: PropTypes.object,
  margin: PropTypes.bool,
};

TextInput.defaultProps = {
  password: false,
  onChangeText: (text) => text,
  error: false,
  forwardRef: null,
  margin: true,
};

export default TextInput;
