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

class ModalContent extends Component {
  render () {
    return (
      <View
        style={{ backgroundColor: 'transparent', height: '100%', flex: 1 }}
        // onPressOut={() => this.props.setModalVisible(!this.props.modalVisible)}
      >
        <View style={{backgroundColor: '#fff', height: 400, margin: 20, padding: 20, borderWidth: 3, borderColor: '#cdcdcd' }}>
          <Text>Filter combobox</Text>

          <TouchableHighlight
            onPress={() => {
              this.props.setModalVisible(!this.props.modalVisible)
            }}
          >
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={{ flex: 1, backgroundColor: 'transparent' }} onPress={() => this.props.setModalVisible(!this.props.modalVisible)}>
          <Text />
        </TouchableHighlight>
      </View>
    )
  }
}

export default ModalContent
