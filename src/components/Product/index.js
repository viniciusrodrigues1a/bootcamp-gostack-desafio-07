import React, { PureComponent } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  ProductContainer,
  ProductImage,
  AddToCartButton,
  AddToCartIconContainer,
  AddToCartText,
  AddToCartIconText,
} from './styles';
import { ProductName, ProductPrice } from '../../styles';

export default class Product extends PureComponent {
  state = {
    item: {},
    amountInCart: {},
    handleAddProduct: () => {},
  };

  componentDidMount() {
    const { item, amountInCart, handleAddProduct } = this.props;

    this.setState({
      item,
      amountInCart,
      handleAddProduct,
    });
  }

  render() {
    const { item, amountInCart, handleAddProduct } = this.state;

    return (
      <ProductContainer key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductName numberOfLines={3}>{item.title}</ProductName>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddToCartButton onPress={handleAddProduct}>
          <AddToCartIconContainer>
            <Icon name="add-shopping-cart" size={30} color="#fff" />
            <AddToCartIconText>{amountInCart[item.id] || 0}</AddToCartIconText>
          </AddToCartIconContainer>
          <AddToCartText>Adicionar</AddToCartText>
        </AddToCartButton>
      </ProductContainer>
    );
  }
}
