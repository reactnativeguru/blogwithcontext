import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/Home';
//import context
import {Provider} from './src/context/BlogContext'
// import {BlogProvider} from './src/context/BlogContextReducer'

// setup navigation
const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions :{
    title: 'Blogs'
  }
})

// create App
const App = createAppContainer(navigator)

export default () => {
  return (
  <Provider>
  <App/>
  </Provider>
  )
}