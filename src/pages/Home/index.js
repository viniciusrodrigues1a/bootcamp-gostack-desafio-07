import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import Product from '../../components/Product';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';

import { ContainerWrapper } from '../../styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    })();
  }, []);

  function handleAddProduct(product) {
    dispatch(CartActions.addToCartRequest(product.id));
  }

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
                handleAddProduct={() => handleAddProduct(item)}
              />
            )}
          />
        </View>
      </ContainerWrapper>
    </>
  );
}
