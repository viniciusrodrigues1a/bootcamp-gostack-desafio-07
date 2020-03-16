import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

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

class Home extends Component {
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

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  renderProduct = ({ item }) => {
    const { cart, amountInCart } = this.props;

    return (
      <ProductContainer key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductName numberOfLines={3}>{item.title}</ProductName>
        <ProductPrice>R$ {item.price}</ProductPrice>
        <AddToCartButton onPress={() => this.handleAddProduct(item)}>
          <AddToCartIconContainer>
            <Icon name="add-shopping-cart" size={30} color="#fff" />
            <AddToCartIconText>{amountInCart[item.id] || 0}</AddToCartIconText>
          </AddToCartIconContainer>
          <AddToCartText>Adicionar</AddToCartText>
        </AddToCartButton>
      </ProductContainer>
    );
  };

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
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Cart')}>
          <Text>go to cart</Text>
        </TouchableOpacity>
      </ContainerWrapper>
    );
  }
}

const mapStateToProps = state => ({
  amountInCart: state.cart.reduce((amountInCart, product) => {
    amountInCart[product.id] = product.amount;
    return amountInCart;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
