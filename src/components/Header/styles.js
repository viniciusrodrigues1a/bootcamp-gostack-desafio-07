import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  background: #141419;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 10px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})``;

export const BasketContainer = styled.View`
  position: relative;
`;

export const BasketText = styled.Text`
  color: #fff;
  background: #7159c1;
  padding: 0 3px;
  border-radius: 4px;
  text-align: center;
  position: absolute;
  top: -20%;
  right: -10%;
`;
