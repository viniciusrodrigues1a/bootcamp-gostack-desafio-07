import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';

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

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  renderProduct = ({ item }) => {
    const { amountInCart } = this.props;

    return (
      <ProductContainer key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductName numberOfLines={3}>{item.title}</ProductName>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
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
      <>
        <Header />
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
      </>
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
