'use strict' 

import React from 'react'
import { createStackNavigator } from 'react-navigation'
import SearchPage from '../SearchPage'

const App = createStackNavigator({
  Home: { screen: SearchPage },
})

export default App