import React, { Component } from 'react'
import { Root } from 'native-base'
import { connect } from 'react-redux'
import InAppBrowser from 'react-native-inappbrowser-reborn'
// import SplashScreen from 'react-native-splash-screen'

import ReduxNavigation from '../Navigation/ReduxNavigation'
import StartupActions from '../Redux/StartupRedux'
import WebsocketActions from '../Redux/WebsocketRedux'
import ReduxPersist from '../Config/ReduxPersist'
import { SessionSelectors } from '../Redux/SessionRedux'

// component
import StyledView from '../Components/StyledView'
import { Images } from '../Themes'

import PopupActions, { PopupSelectors } from '../Redux/PopupRedux'
import AppActions, { AppSelectors } from '../Redux/AppRedux'

class RootContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // SplashScreen.hide()
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
    // this.props.websocketSetup({ timestamp: new Date() })
    this.props.appPatch({ loading: false })
  }

  render () {
    const navigator = (<ReduxNavigation />)
    return (
      <Root>
        {/* <StyledView style={{ paddingHorizontal: 0 }} isLoading={this.props.loading}> */}
        {/* {isIphoneX ? (
          <SafeArea navigator={navigator} />
        ) : (
          navigator
        )} */}
        {navigator}
        {/* </StyledView> */}
      </Root>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // isLoggedIn: state.login
    message: PopupSelectors.getPopupMessage(state.popup),
    isOpen: PopupSelectors.getPopupOpen(state.popup),
    loading: AppSelectors.loading(state.app),
    appState: 'active',
    appUpdate: false,
    isLoggedIn: SessionSelectors.isLoggedIn(state.session)
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  websocketSetup: (action) => dispatch(WebsocketActions.websocketSetup(action)),
  hidePopup: () => dispatch(PopupActions.popupHide()),
  appPatch: data => dispatch(AppActions.appPatch(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
