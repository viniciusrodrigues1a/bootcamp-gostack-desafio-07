import React from 'react';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/images/logo.png';

import { Container, BasketContainer, BasketText } from './styles';

export default function Header({ canGoBack }) {
  const productsInCart = useSelector(state => state.cart.length);
  const navigation = useNavigation();

  return (
    <Container>
      {canGoBack && (
        <Icon
          name="arrow-back"
          color="#fff"
          size={28}
          onPress={() => navigation.navigate('Home')}
        />
      )}
      <Image source={logo} />
      <BasketContainer>
        <Icon
          name="shopping-basket"
          size={30}
          color="#fff"
          onPress={() => navigation.navigate('Cart')}
        />
        <BasketText>{productsInCart}</BasketText>
      </BasketContainer>
    </Container>
  );
}

Header.propTypes = {
  canGoBack: PropTypes.bool,
};

Header.defaultProps = {
  canGoBack: false,
};
