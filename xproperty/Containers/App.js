import '../Config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import codePush from 'react-native-code-push'
import { StyleProvider } from 'native-base'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import getTheme from '../native-base-theme/components'
import variables from '../native-base-theme/variables/commonColor'

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME }

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  codePushStatusDidChange (status) {
    switch (status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('Checking for updates.')
        break
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('Downloading package.')
        break
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log('Installing update.')
        break
      case codePush.SyncStatus.UP_TO_DATE:
        console.log('Up-to-date.')
        break
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log('Update installed.')
        break
    }
  }

  codePushDownloadDidProgress (progress) {
    console.log(progress.receivedBytes + ' of ' + progress.totalBytes + ' received.')
  }

  render () {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(variables)}>
          <RootContainer />
        </StyleProvider>
      </Provider>
    )
  }
}
const MyApp = codePush(codePushOptions)(App)
// export default App
export default MyApp
