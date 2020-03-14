import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import img from '../../assets/images/aa.jpg';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  AddToCartButton,
  AddToCartIconContainer,
  AddToCartText,
  AddToCartIconText,
} from './styles';

export default class Home extends Component {
  state = {
    data: [
      {
        id: 'asdljmasdljmldas',
        name: 'Tênis de caminhada leve confortável',
        price: 'R$ 359,90',
      },
      {
        id: 'asdljmasdasdasdasdljmldas',
        name: 'Tênis de caminhada leve confortável',
        price: 'R$ 359,90',
      },
      {
        id: 'asdljmasdljmasdasdldas',
        name: 'Tênis de caminhada leve confortável',
        price: 'R$ 359,90',
      },
    ],
  };

  renderProduct = ({ item }) => (
    <ProductContainer key={item.id}>
      <ProductImage source={img} />
      <ProductName>{item.name}</ProductName>
      <ProductPrice>{item.price}</ProductPrice>
      <AddToCartButton>
        <AddToCartIconContainer>
          <Icon name="add-shopping-cart" size={30} color="#fff" />
          <AddToCartIconText>0</AddToCartIconText>
        </AddToCartIconContainer>
        <AddToCartText>Adicionar</AddToCartText>
      </AddToCartButton>
    </ProductContainer>
  );

  render() {
    return (
      <Container>
        <View>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            horizontal
            renderItem={this.renderProduct}
          />
        </View>
      </Container>
    );
  }
}
