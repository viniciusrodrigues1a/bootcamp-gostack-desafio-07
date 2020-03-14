import React, { Component } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import img from '../../assets/images/aa.jpg';

import {
  ProductsList,
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
        name: 'coronga de caminhada leve confortável',
        price: 'R$ 359,90',
      },
      {
        id: 'asdljmasdljmasdasdldas',
        name: 'chica cunha de caminhada leve confortável',
        price: 'R$ 359,90',
      },
    ],
  };

  render() {
    return (
      <ProductsList
        // horizontal
        data={this.state.data}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({ item }) => (
          <ProductContainer>
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
        )}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: '100%',
                width: 20,
              }}
            />
          );
        }}
      />
    );
  }
}
