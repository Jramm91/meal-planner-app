import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  SectionList,
} from 'react-native';

const DATA = [
    {
        id: "1234",
        itemName: 'First'
    },
    {
        id: "5677",
        itemName: 'second'
    },
    {
        id: '8736',
        itemName: 'third'
    }
]

const Item = ({itemName}) => {
    <View>
        <Text>{itemName}</Text>
    </View>
}

export default function ShoppingList() {
  const [inputText, setInputText] = useState('');
  const { wrapper, container, header, image, input } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <ScrollView contentContainerStyle={container}>
        <Text style={header}>Shopping List</Text>
        <Image style={image} source={require('../../assets/shopping.png')} />
        <TextInput
          style={input}
          onChangeText={setInputText}
          value={inputText}
          placeholder="Bread"
        />
        <Button 
            title='Add'
        />
        <SectionList 
            data={DATA}
            renderItem={({item}) => <Item itemName={item.itemName} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#f2f2d2',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    // fontFamily:
    marginTop: 28,
  },
  image: {
    resizeMode: 'contain',
    width: 250,
    marginVertical: 0,
    marginHorizontal: 'auto',
  },
  input: {},
  btn: {},
  list: {}
});
