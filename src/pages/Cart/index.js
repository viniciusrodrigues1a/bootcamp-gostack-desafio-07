import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductContainer,
  ProductImage,
  TextWrapper,
  ProductInfoContainer,
  ChangeAmountContainer,
  VisualizeAmountInput,
  TotalText,
  TotalValue,
  BuyButton,
  BuyButtonText,
} from './styles';
import { ContainerWrapper, ProductPrice, ProductName } from '../../styles';

import img from '../../assets/images/aa.jpg';

export default function Cart() {
  return (
    <ContainerWrapper>
      <Container>
        <ProductContainer>
          <ProductImage source={img} />
          <TextWrapper>
            <ProductName numberOfLines={5}>
              Tênis de caminhada leve confortável
            </ProductName>
            <ProductPrice>R$ 179,90</ProductPrice>
          </TextWrapper>
          <Icon name="delete" size={40} color="#7159c1" />
        </ProductContainer>

        <ProductInfoContainer>
          <ChangeAmountContainer>
            <Icon name="add-circle-outline" size={26} color="#7159c1" />
            <VisualizeAmountInput editable={false}>1</VisualizeAmountInput>
            <Icon name="remove-circle-outline" size={26} color="#7159c1" />
          </ChangeAmountContainer>
          <ProductPrice>R$ 179,90</ProductPrice>
        </ProductInfoContainer>

        <TotalText>Total</TotalText>
        <TotalValue>R$ 179,90</TotalValue>

        <BuyButton>
          <BuyButtonText>Finalizar pedido</BuyButtonText>
        </BuyButton>
      </Container>
    </ContainerWrapper>
  );
}
