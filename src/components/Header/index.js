import React from 'react';
import { Image } from 'react-native';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/images/logo.png';

import { Container, BasketContainer, BasketText } from './styles';

function Header({ productsInCart }) {
  return (
    <Container>
      <Image source={logo} />
      <BasketContainer>
        <Icon name="shopping-basket" size={30} color="#fff" />
        <BasketText>{productsInCart}</BasketText>
      </BasketContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  productsInCart: state.cart.length,
});

export default connect(mapStateToProps)(Header);
