import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/Header';
import Product from '../../components/Product';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';

import { ContainerWrapper } from '../../styles';

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
              renderItem={({ item }) => (
                <Product
                  item={item}
                  handleAddProduct={() => this.handleAddProduct(item)}
                />
              )}
            />
          </View>
        </ContainerWrapper>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
