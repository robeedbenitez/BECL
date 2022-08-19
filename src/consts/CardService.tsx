
import React from 'react'

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'

import { NavigationContext } from '@react-navigation/native';

function CardService(props) {
  
    console.log ("propiedades de las cardservices "+JSON.stringify(props))
  return (
    <>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={props.navigation.navigate(props.action)}
      >
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </>
  )
}

export default CardService

const styles = StyleSheet.create({
  cardContainer: {
    width: '50%',
    fontSize: 30,
    alignItems: "center",
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderBottomColor: '#000',
    margin: 10,
  },
})