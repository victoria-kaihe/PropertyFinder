'use strict' 

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search for houses to buy!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontSize: 18,
    color: '#656565',
    marginTop: 65,
  },
})
