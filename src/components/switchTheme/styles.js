import styled from 'styled-components/native';
import Text from '~/components/text';
import * as dimens from '~/styles/dimens';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Label = styled(Text)`
  padding-horizontal: ${dimens.padding}px;
`;