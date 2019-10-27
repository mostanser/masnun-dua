import React, { Component } from 'react'
import AppNavigation from './src/navigation'
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {
  UNSAFE_componentWillMount() {
    SplashScreen.show()
  }
  
  componentDidMount() {
    setTimeout(function(){ SplashScreen.hide() }, 3000);
    
  }
  render() {
    return <AppNavigation />
  }
}
