'use strict' 

import React from 'react'
import { StackNavigator } from 'react-navigation'
import SearchPage from '../SearchPage'

const App = StackNavigator({
  Home: { screen: SearchPage },
})

export default App