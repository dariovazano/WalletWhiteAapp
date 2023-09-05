import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'

import Modal from './components/Modal'

export default function App() {
  const [textValue, setTextValue] = useState('')
  const [itemsList, setItemsList] = useState([])
  const [itemSelected, setItemSelected] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [aux, setaux] = useState("")



  const onHandleChangeItem = text => setTextValue(text)

  const addItem = () => {
    if (textValue === '') {
      return
    }
    setItemsList(prevState => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ])
    setTextValue('')
  }

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandleModal(index)}
    >
      <Text style={styles.textItem}>{item?.value}</Text>
    </TouchableOpacity>
  )

  const onHandleDelete = () => {

    let arr = itemsList

    arr.splice(itemSelected, 1)
    setItemsList(arr)
    setModalVisible(false)

  }
  const onHandleCancelar = () => {
    setModalVisible(false)
  }




  const onHandleModal = index => {
    setModalVisible(true)
    setItemSelected(index)
    setaux(itemsList[index].value)
  }





  return (
    <View style={styles.container}>
      <Text style={styles.title}>Word Futball Cup Champion Shopping List</Text>

      <View style={styles.listContainer}>
        <FlatList
          data={itemsList}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Item"
          value={textValue}
          onChangeText={onHandleChangeItem}
        />


      </View>
      <View style={styles.buttonContainer}>
        <Button title="+ ADD" color={'#FCBF49'} onPress={addItem} />
      </View>
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} aux={aux} onHandleCancelar={onHandleCancelar} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: '#75AADB',

  },
  title: {
    fontSize: 35,
    fontWeight: '500',
    marginBottom: 25,
    color: `#FCBF49`,
    textAlign: 'center',
  },
  inputContainer: {
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginBottom: 10

  },
  input: {
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 12,
  },
  listContainer: {
    marginTop: 25,
    height: 450,
  },
  itemContainer: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#fe6855',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,

  },
  textItem: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#843511',
    fontWeight: '600',
    fontVariant: 'no-common-ligatures',
    textAlign: 'center'
  },
})