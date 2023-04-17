import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ListaDeCompras = () => {
  const [item, setItem] = useState('');
  const [listadeCompra, setListadeCompra] = useState([]);

  const handleAddItem = () => {
    setListadeCompra([...listadeCompra, item]);
    setItem('');
  };

  const handleRemoveItem = (index) => {
    const newList = [...listadeCompra];
    newList.splice(index, 1);
    setListadeCompra(newList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione um item"
          value={item}
          onChangeText={setItem}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddItem}>
          <FontAwesome name="shopping-cart" size={18} color="black" style={styles.cartIcon} />
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listadeCompra}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => handleRemoveItem(index)}>
            <Text style={styles.item}>{item}</Text>
            <Text style={styles.remove}>Remover</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartIcon: {
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
  },
  item: {
    flex: 1,
    fontSize: 18,
  },
  remove: {   
    color: 'cyan',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ListaDeCompras;
