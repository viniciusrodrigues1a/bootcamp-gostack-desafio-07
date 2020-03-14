import React from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/images/logo.png';

import { Container, BasketContainer, BasketText } from './styles';

export default function Header() {
  return (
    <Container>
      <Image source={logo} />
      <BasketContainer>
        <Icon name="shopping-basket" size={30} color="#fff" />
        <BasketText>3</BasketText>
      </BasketContainer>
    </Container>
  );
}
