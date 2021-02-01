import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

interface Props {
  item: any;
  deleteItem: Function;
}

const ListItem = (props: Props) => {
  const {
    item: {text, id},
    deleteItem,
  } = props;

  return (
    <Main>
      <ItemWrapper>
        <Item>{text}</Item>
        <Icon
          name="remove"
          size={20}
          color="#E4007C"
          onPress={() => deleteItem(id)}
        />
      </ItemWrapper>
    </Main>
  );
};

export default ListItem;

const Main = styled(TouchableOpacity)``;

const ItemWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f8f8;
`;

const Item = styled(Text)`
  font-size: 18px;
`;
