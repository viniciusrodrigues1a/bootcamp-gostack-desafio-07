import React from 'react';
import { FlatList } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import formatPrice from '../../utils/formatPrice';

import * as CartActions from '../../store/modules/cart/actions';

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
  EmptyCartContainer,
  EmptyCartText,
} from './styles';
import { ContainerWrapper, ProductPrice, ProductName } from '../../styles';

function Cart({ cart, total, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  function handleRemoveProduct(id) {
    removeFromCart(id);
  }

  function renderProduct({ item }) {
    return (
      <>
        <ProductContainer>
          <ProductImage source={{ uri: item.image }} />
          <TextWrapper>
            <ProductName numberOfLines={5}>{item.title}</ProductName>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
          </TextWrapper>
          <Icon
            name="delete"
            size={40}
            color="#7159c1"
            onPress={() => handleRemoveProduct(item.id)}
          />
        </ProductContainer>

        <ProductInfoContainer>
          <ChangeAmountContainer>
            <Icon
              name="add-circle-outline"
              size={26}
              color="#7159c1"
              onPress={() => increment(item)}
            />
            <VisualizeAmountInput editable={false}>
              {item.amount}
            </VisualizeAmountInput>
            <Icon
              name="remove-circle-outline"
              size={26}
              color="#7159c1"
              onPress={() => decrement(item)}
            />
          </ChangeAmountContainer>
          <ProductPrice>{item.subtotal}</ProductPrice>
        </ProductInfoContainer>
      </>
    );
  }

  return (
    <>
      <Header canGoBack />
      <ContainerWrapper>
        <Container>
          {cart.length > 0 ? (
            <>
              <FlatList
                data={cart}
                renderItem={renderProduct}
                keyExtractor={item => String(item.id)}
              />

              <TotalText>Total</TotalText>
              <TotalValue>{total}</TotalValue>

              <BuyButton>
                <BuyButtonText>Finalizar pedido</BuyButtonText>
              </BuyButton>
            </>
          ) : (
            <EmptyCartContainer>
              <Icon name="remove-shopping-cart" size={50} color="#999" />
              <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
            </EmptyCartContainer>
          )}
        </Container>
      </ContainerWrapper>
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
