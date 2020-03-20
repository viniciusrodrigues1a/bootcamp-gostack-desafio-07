import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

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

export default function Product({ item, handleAddProduct }) {
  const amountInCart = useSelector(state =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );

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

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    priceFormatted: PropTypes.string,
  }).isRequired,
  handleAddProduct: PropTypes.func.isRequired,
};
