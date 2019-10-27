import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import LandingScreen from './screens/LandingScreen'
import DetailScreen from './screens/DetailScreen'

const AppStack = createStackNavigator({
  Home: {
    screen: LandingScreen,
    navigationOptions: {
      header: null,
    },
  },
  Details: {
    screen: DetailScreen,
    navigationOptions: () => ({
      headerTransparent: true,
    }),
  },
})

// AppNavigator = createDrawerNavigator(
//   {
//     Home: AppStack,
//   },
//   {
//     contentComponent: Drawer,
//   },
// )

const AppContainer = createAppContainer(AppStack)

export default AppContainer
