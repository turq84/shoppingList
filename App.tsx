import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styled from 'styled-components';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import uuid from 'uuidv4';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'oat milk'},
    {id: uuid(), text: 'eggs'},
    {id: uuid(), text: 'bread'},
    {id: uuid(), text: 'salmon'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };
  const addItem = (text) => {
    setItems((prevItems) => {
      showMessage({
        message: 'Item added! 🎉',
        textStyle: {fontSize: 24},
      });
      return [{id: uuid(), text}, ...prevItems];
    });
  };

  return (
    <View>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <Notification
        titleStyle={{fontSize: 18, textAlign: 'center'}}
        position="top"
      />
    </View>
  );
};

export default App;

const Notification = styled(FlashMessage)`
  background-color: #00cdd1;
`;
