import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

interface Props {
  addItem: Function;
}

const AddItem = (props: Props) => {
  const {addItem} = props;

  const [text, setText] = useState('');

  return (
    <View>
      <Input
        value={text}
        onChangeText={(textValue) => setText(textValue)}
        placeholder="Add item ..."
      />
      <ButtonWrapper onPress={() => addItem(text)}>
        <Button>
          <Icon name="plus" size={20} color="white" />
          Add Item
        </Button>
      </ButtonWrapper>
    </View>
  );
};

export default AddItem;

const Input = styled(TextInput)`
  font-size: 18px;
  margin-bottom: 15px;
  padding: 0px 10px;
`;

const ButtonWrapper = styled(TouchableOpacity)``;

const Button = styled(Text)`
width: 100%
padding: 10px;
text-align: center;
color: white;
background-color: #4a5aef;
font-size: 18px;
`;
