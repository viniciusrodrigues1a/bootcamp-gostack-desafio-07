import styled from 'styled-components/native';
import { lighten } from 'polished';

export const ContainerWrapper = styled.View`
  flex: 1;
  background: ${lighten(0.08, '#141419')};
`;

export const ProductName = styled.Text`
  color: #555;
  font-size: 18px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;
