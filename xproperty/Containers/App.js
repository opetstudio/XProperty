import '../Config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StyleProvider } from 'native-base'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import getTheme from '../native-base-theme/components'
import variables from '../native-base-theme/variables/commonColor'

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
export default App
