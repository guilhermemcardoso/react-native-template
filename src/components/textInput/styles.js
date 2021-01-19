import styled from 'styled-components/native';

import * as dimens from '~/styles/dimens';

export const Container = styled.View`
  justify-content: center;
  align-self: stretch;
  margin: ${dimens.margin}px;
`;

export const Input = styled.TextInput`
  background: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  align-self: stretch;
  padding: ${dimens.padding}px;
  border-radius: ${dimens.border_radius}px;
  font-size: ${dimens.general_font_size}px;
  text-align: center;
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  elevation: 2;
  border: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
`;