import React from 'react';
import { FlatList } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
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
} from './styles';
import { ContainerWrapper, ProductPrice, ProductName } from '../../styles';

function Cart({ cart, removeFromCart }) {
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
            <ProductPrice>R$ {item.price}</ProductPrice>
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
            <Icon name="add-circle-outline" size={26} color="#7159c1" />
            <VisualizeAmountInput editable={false}>1</VisualizeAmountInput>
            <Icon name="remove-circle-outline" size={26} color="#7159c1" />
          </ChangeAmountContainer>
          <ProductPrice>R$ 179,90</ProductPrice>
        </ProductInfoContainer>
      </>
    );
  }

  return (
    <ContainerWrapper>
      <Container>
        <FlatList
          data={cart}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
        />

        <TotalText>Total</TotalText>
        <TotalValue>R$ 179,90</TotalValue>

        <BuyButton>
          <BuyButtonText>Finalizar pedido</BuyButtonText>
        </BuyButton>
      </Container>
    </ContainerWrapper>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
