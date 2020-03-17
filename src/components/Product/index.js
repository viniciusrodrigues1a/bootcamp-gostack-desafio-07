import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

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

class Product extends PureComponent {
  state = {
    item: {},
    handleAddProduct: () => {},
  };

  componentDidMount() {
    const { item, handleAddProduct } = this.props;

    this.setState({
      item,
      handleAddProduct,
    });
  }

  render() {
    const { item, handleAddProduct } = this.state;
    const { amountInCart } = this.props;

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

const mapStateToProps = state => ({
  amountInCart: state.cart.reduce((amountInCart, product) => {
    amountInCart[product.id] = product.amount;
    return amountInCart;
  }, {}),
});

export default connect(mapStateToProps)(Product);
