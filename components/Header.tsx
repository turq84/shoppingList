import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Title>Shopping List 🛍️</Title>
    </Container>
  );
};

export default Header;

const Container = styled(View)`
  margin: 100px auto 50px;
`;

const Title = styled(Text)`
  font-size: 40px;
  margin: auto;
`;
