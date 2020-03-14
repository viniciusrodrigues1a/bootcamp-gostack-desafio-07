import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const ProductsList = styled.FlatList``;

export const ProductContainer = styled.View`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  height: 80%;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const ProductName = styled.Text`
  color: #666;
  font-size: 18px;
`;

export const ProductPrice = styled.Text`
  font-size: 24px;
`;

export const AddToCartButton = styled(RectButton)`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  border-radius: 4px;
`;

export const AddToCartIconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${darken(0.06, '#7159c1')};
  padding: 6px;
  border-radius: 4px;
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
`;
