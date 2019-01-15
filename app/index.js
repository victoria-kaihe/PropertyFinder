'use strict' 

import React from 'react'
import { createStackNavigator } from 'react-navigation'
import SearchPage from '../SearchPage'
import SearchResults from '../SearchResults'

const App = createStackNavigator(
  {
    Home: SearchPage,
    Results: SearchResults,
  }
)

export default App