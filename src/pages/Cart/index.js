import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function handleRemoveProduct(id) {
    dispatch(CartActions.removeFromCart(id));
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
                renderItem={item => (
                  <>
                    <ProductContainer>
                      <ProductImage source={{ uri: item.image }} />
                      <TextWrapper>
                        <ProductName numberOfLines={5}>
                          {item.title}
                        </ProductName>
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
                )}
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
