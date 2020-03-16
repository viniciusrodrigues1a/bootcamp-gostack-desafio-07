import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const TextWrapper = styled.View`
  flex: 1;
  margin: 10px;
`;

export const ProductInfoContainer = styled.View`
  background: #eee;
  border-radius: 6px;
  padding: 5px 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ChangeAmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const VisualizeAmountInput = styled.TextInput`
  text-align: center;
  font-size: 22px;
  color: #555;
`;

export const TotalText = styled.Text`
  color: #999;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-top: 30px;
`;

export const TotalValue = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 36px;
`;

export const BuyButton = styled(RectButton)`
  background: #7159c1;
  padding: 15px 0;
  border-radius: 6px;
  margin-top: 20px;
`;

export const BuyButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
