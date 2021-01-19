import styled from 'styled-components/native';

import * as dimens from '~/styles/dimens';

export const StyledText = styled.Text`
  font-size: ${({ title }) => (title ? dimens.title_font_size : dimens.general_font_size)}px;
  line-height: ${({ title }) => (title ? 30 : 24)}px;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`;
