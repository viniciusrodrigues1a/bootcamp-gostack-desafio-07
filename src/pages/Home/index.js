import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  ProductContainer,
  ProductImage,
  AddToCartButton,
  AddToCartIconContainer,
  AddToCartText,
  AddToCartIconText,
} from './styles';
import { ContainerWrapper, ProductName, ProductPrice } from '../../styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  };

  renderProduct = ({ item }) => (
    <ProductContainer key={item.id}>
      <ProductImage source={{ uri: item.image }} />
      <ProductName numberOfLines={1}>{item.title}</ProductName>
      <ProductPrice>R$ {item.price}</ProductPrice>
      <AddToCartButton onPress={() => this.props.navigation.navigate('Cart')}>
        <AddToCartIconContainer>
          <Icon name="add-shopping-cart" size={30} color="#fff" />
          <AddToCartIconText>0</AddToCartIconText>
        </AddToCartIconContainer>
        <AddToCartText>Adicionar</AddToCartText>
      </AddToCartButton>
    </ProductContainer>
  );

  render() {
    const { products } = this.state;

    return (
      <ContainerWrapper>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={item => String(item.id)}
            horizontal
            renderItem={this.renderProduct}
          />
        </View>
      </ContainerWrapper>
    );
  }
}
