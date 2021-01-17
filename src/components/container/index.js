import React from 'react';
import {StyledContainer} from './styles';

const Container = ({children, ...rest}) => (
  <StyledContainer {...rest}>
    {children}
  </StyledContainer>
);

export default Container;