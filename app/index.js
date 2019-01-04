'use strict' 

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation';


class SearchPage extends React.Component {
  static navigationOptions = {
    title: 'Property Finder'
  }
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
    marginTop: 50,
  },
})

const App = StackNavigator({
  Home: { screen: SearchPage },
})

export default App