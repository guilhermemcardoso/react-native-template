import styled from 'styled-components/native';

import * as dimens from '~/styles/dimens';

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  padding: ${dimens.padding}px;
  justify-content: center;
  align-items: center;
`;