import React from 'react'
import { createStackNavigator as StackNavigator, createDrawerNavigator as DrawerNavigator, createSwitchNavigator } from 'react-navigation'
import Sidebar from '../Screens/Sidebar'
import navigatorHelper from '../Lib/helper/navigator'
import { isIphoneX } from '../Lib/helper/platform'

import ScreenLogin from '../Screens/Login/ScreenLogin'
import ScreenHome from '../Screens/Home/ScreenHome'
import ScreenSignup from '../Screens/Signup/ScreenSignup'
import ScreenAuthentication from '../Screens/Authentication/ScreenAuthentication'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const menuRoutes = {
  ScreenHome: { screen: ScreenHome, navigationOptions: { drawerLabel: 'Home' } }
}
navigatorHelper.setMenuNavigationRoutes(menuRoutes)
const DrawerMenuNavigator = DrawerNavigator(menuRoutes, {
  // Default config for all screens
  initialRouteName: 'ScreenHome',
  contentOptions: {
    activeTintColor: '#e91e63'
  },

  // headerMode: 'none',
  // initialRouteName: 'ScreenHome',
  // navigationOptions: {
  //   headerStyle: styles.header
  // },
  contentComponent: props => <Sidebar {...props} />
  // contentComponent: props => <Drawer {...props} />
})
const loggedinNavigator = StackNavigator({
  DrawerMenuNavigator: { screen: DrawerMenuNavigator },
  ScreenDashboard: { screen: ScreenHome }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'DrawerMenuNavigator',
  // navigationOptions: {
  //   headerStyle: styles.header
  // },
  // cardStyle: isIphoneX ? { shadowColor: 'transparent' } : {}
})
const unloggedinNavigator = StackNavigator({
  ScreenLogin: { screen: ScreenLogin },
  ScreenSignup: { screen: ScreenSignup }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ScreenLogin',
  navigationOptions: {
    headerStyle: styles.header
  },
  cardStyle: isIphoneX ? { shadowColor: 'transparent' } : {}
})

const switchNavigator = createSwitchNavigator({
  loggedinNavigator,
  unloggedinNavigator,
  ScreenAuthentication
}, { initialRouteName: 'ScreenAuthentication' })

export default switchNavigator
