/**
 * @format
 */
import 'react-native-gesture-handler'
import { AppRegistry, YellowBox } from 'react-native'
import App from './xproperty/Containers/App'
import { name as appName } from './app.json'
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested' // TODO: Remove when fixed
])
AppRegistry.registerComponent(appName, () => App)
