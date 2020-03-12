import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, BasketContainer, BasketText } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo />
      <BasketContainer>
        <Icon name="shopping-basket" size={30} color="#fff" />
        <BasketText>3</BasketText>
      </BasketContainer>
    </Container>
  );
}
