'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  Flatlist,
  Text,
} from 'react-native'

export default class SearchResults extends Component<{}> {
  _keyExtractor = (item, index) => index

  _renderItem = ({item}) => {
    return (
      <TouchableHighlight
      underlayColor='#dddddd'>
      <View>
        <Text>{item.title}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <Flatlist
      data={this.propslistings}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      />
    )
  }
}