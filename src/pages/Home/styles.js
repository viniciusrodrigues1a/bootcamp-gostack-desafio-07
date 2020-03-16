import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const ProductContainer = styled.View`
  background: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  width: 350px;
  height: 480px;
`;

export const ProductImage = styled.Image`
  width: 300px;
  height: 300px;
`;

export const AddToCartButton = styled(RectButton)`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  border-radius: 6px;
`;

export const AddToCartIconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${darken(0.06, '#7159c1')};
  padding: 6px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const AddToCartIconText = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-left: 8px;
  margin-right: 5px;
`;

export const AddToCartText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  margin-right: 10px;
  flex: 1;
  text-align: center;
  font-weight: bold;
`;
