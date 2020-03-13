import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { ProductsList, ProductContainer, ProductImage, ProductName, ProductPrice, AddToCartContainer, AddToCartText } from './styles';

export default function Home() {
  return (
    <ProductsList>
      <ProductContainer>
        <ProductImage source={} />
        <ProductName>nome....</ProductName>
        <ProductPrice>R$ 359</ProductPrice>
        <AddToCartContainer>
          <Icon name="add-shopping-cart" color="#fff" />
          <AddToCartText>Adicionar ao carrinho</AddToCartText>
        </AddToCartContainer>
      </ProductContainer>
    </ProductsList>
  );
}
