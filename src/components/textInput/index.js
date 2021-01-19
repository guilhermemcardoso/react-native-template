import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Input, Container} from './styles';
import { ThemeContext } from 'styled-components/native';

const TextInput = ({onChangeText, error, margin, forwardRef, ...rest}) => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <Input
        ref={forwardRef}
        onChangeText={onChangeText}
        error={error}
        placeholderTextColor={theme.PLACEHOLDER_COLOR} 
        {...rest}
      />
    </Container>
  );
};

TextInput.propTypes = {
  onChangeText: PropTypes.func,
  error: PropTypes.bool,
  forwardRef: PropTypes.object,
  margin: PropTypes.bool
};

TextInput.defaultProps = {
  onChangeText: (text) => text,
  error: false,
  forwardRef: null,
  margin: true
};

export default TextInput;