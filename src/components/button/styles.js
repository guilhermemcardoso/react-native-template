import styled from 'styled-components/native';

import * as dimens from '../../styles/dimens';

export const TouchableOpacity = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  padding: ${dimens.padding}px;
  justify-content: center;
  align-items: center;
  border-radius: ${dimens.border_radius}px;
  border-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  border-width: 1px;
  margin: ${({ margin }) => (margin ? dimens.margin_large * 2 : 0)}px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  elevation: 1;
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
`;
