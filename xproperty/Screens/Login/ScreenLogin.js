
import React from 'react'
import { View, StyleSheet, ScrollView, TextInput, Alert, ImageBackground, Image, TouchableHighlight, StatusBar } from 'react-native'
import { Button, Text, Container, Form, Input, Item, Content } from 'native-base'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/Ionicons'

import { Images, Colors, Metrics } from '../../Themes'
import { isLoggedIn } from '../../Lib/Utils'
import SessionAction, { SessionSelectors } from '../../Redux/SessionRedux'

class ScreenLogin extends React.Component {
  static propTypes = {
    loginRequest: PropTypes.func,
    sessionToken: PropTypes.string,
    isLoggedIn: PropTypes.bool
  }

  static defaultProps = {
    loginRequest: () => {}
    // sessionToken: null
  }

  constructor (props) {
    super(props)
    this.state = {
      userid: '',
      password: '',
      sessionToken: this.props.sessionToken
    }
    this._doLogin = this._doLogin.bind(this)
  }

  async componentDidUpdate (prevProps) {
    console.log('componentDidUpdate this.props.sessionToken=', this.props.sessionToken)
    console.log('componentDidUpdate prevProps.sessionToken=', prevProps.sessionToken)
    if (this.props.isLoggedIn !== null && !_.isEqual(prevProps.isLoggedIn, this.props.isLoggedIn)) {
      const isLogin = await isLoggedIn()
      console.log('isLogin=', isLogin)
      if (this.props.isLoggedIn) this.props.navigation.navigate('loggedinNavigator')
    }
  }

  _doLogin () {
    const username = this.state.userid
    const password = this.state.password

    if (username !== '' && password !== '') {
      this.props.loginRequest({ userid: username, password: password })
    } else {
      Alert.alert('invalid userid or password')
    }
  }

  render () {
    return (
      <Container style={{}}>
        <ImageBackground source={Images.backgroundXpay} style={{ width: '100%', height: '100%' }}>
          <Content>
            <View style={{ margin: 30, alignItems: 'center' }}>
              {/* <Image
                source={Images.logoBayar2} style={{
                  marginTop: Metrics.doubleSection,
                  height: Metrics.images.logo,
                  width: Metrics.images.logo,
                  resizeMode: 'contain'

                }}
              /> */}
            </View>
            <Form>
              <Item style={{ marginLeft: 0 }}>
                <Input placeholder='Username' style={{ textAlign: 'center' }} onChangeText={(v) => this.setState({ userid: v })} keyboardType='email-address' />
              </Item>
              <Item style={{ marginLeft: 0 }}>
                <Input placeholder='Password' secureTextEntry style={{ textAlign: 'center' }} onChangeText={(v) => this.setState({ password: v })} />
              </Item>
              <Button block style={{ margin: 15, marginTop: 50 }} onPress={() => this._doLogin()}>
                <Text>Sign In</Text>
              </Button>
              <Text style={{ alignSelf: 'center' }}>Dont have an acoount yet?</Text>
              <Text style={{ alignSelf: 'center', textDecorationLine: 'underline' }} onPress={() => this.props.navigation.navigate('ScreenSignup')}>SignUp</Text>
            </Form>
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    isLoggedIn: SessionSelectors.isLoggedIn(state.session),
    sessionToken: SessionSelectors.sessionToken(state.session)
  }),
  dispatch => ({
    loginRequest: data => dispatch(SessionAction.sessionLogin(data))
  })
)(ScreenLogin)
