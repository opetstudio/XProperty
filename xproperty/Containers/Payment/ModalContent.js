import React, { Component } from 'react'
import _ from 'lodash'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Grid,
  Col,
  Row
} from 'native-base'
import {
  ScrollView, Modal, TouchableHighlight, TouchableOpacity, View, Alert
} from 'react-native'
import { WebView } from 'react-native-webview'

class ModalContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: '',
      paymentDone: false
    }
    this.handleOnMessage = this.handleOnMessage.bind(this)
  }

  handleOnMessage (event) {
    console.log('handleOnMessage===>', event.nativeEvent.data)
    if (event.nativeEvent.data.includes('https://redirect.xendit.co/authentications')) this.setState({ paymentDone: true })
  }

  render () {
    const INJECTED_JAVASCRIPT = `(function() {
        var meta = document.createElement('meta');
        meta.name = "viewport";
        meta.content = "width=device-width, initial-scale=1.0, user-scalable=yes";
        document.getElementsByTagName('head')[0].appendChild(meta);
        window.ReactNativeWebView.postMessage(window.location.href);

    })();`
    return (
      <View
        style={{ backgroundColor: 'transparent', height: '100%', flex: 1 }}
        // onPressOut={() => this.props.setModalVisible(!this.props.modalVisible)}
      >
        <View style={{ backgroundColor: '#fff', height: 400, margin: 20, padding: 20, borderWidth: 3, borderColor: '#cdcdcd' }}>
          {this.state.paymentDone && <Text style={{ fontSize: 24, color: 'green' }}>Payment Success</Text>}
          {!this.state.paymentDone &&
            <WebView
              source={{ uri: this.props.payerAuthenticationUrl }}
              injectedJavaScript={INJECTED_JAVASCRIPT}
              onMessage={this.handleOnMessage}
            />}
          {/* <TouchableHighlight
            onPress={() => {
              this.props.setModalVisible(!this.props.modalVisible)
            }}
          >
            <Text>Hide Modal</Text>
          </TouchableHighlight> */}
        </View>
        <TouchableHighlight style={{ flex: 1, backgroundColor: 'transparent' }} onPress={() => this.props.setModalVisible(!this.props.modalVisible)}>
          <Text />
        </TouchableHighlight>
      </View>
    )
  }
}

export default ModalContent
