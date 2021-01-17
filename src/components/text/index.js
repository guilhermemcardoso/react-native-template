import React from 'react';
import {StyledText} from './styles';

const Text = ({children, ...rest}) => (
  <StyledText {...rest}>{children}</StyledText>
);

export default Text;