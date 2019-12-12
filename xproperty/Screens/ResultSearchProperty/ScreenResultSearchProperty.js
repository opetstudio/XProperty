import React, { Component } from 'react'
import _ from 'lodash'
import { path } from 'ramda'
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
  Row,
  Input,
  ActionSheet
} from 'native-base'
import {
  ScrollView, Modal, TouchableHighlight, TouchableOpacity, View, Alert
} from 'react-native'
import SearchBar from '../../Components/SearchBar'

import styles from './styles'

const floor = []
for (let i = 12; i >= 1; i--) {
  const room = []
  for (let j = 0; j <= 20; j++) {
    if (i === 12 && j === 0) {
      room.push('00')
    } else if (i === 12) {
      room.push(`${_.padStart(j, 2, '0')}`)
    } else if (j === 0) {
      room.push(`${_.padStart(i, 2, '0')}`)
    } else {
      room.push(`${_.padStart(i, 2, '0')}${_.padStart(j, 2, '0')}`)
    }
  }
  floor.push(room)
}
var BUTTONS = ['Baru', 'Harga tertinggi', 'Harga terendah']
var DESTRUCTIVE_INDEX = 3
var CANCEL_INDEX = 4

class ScreenResultSearchProperty extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false
    }
    this.setModalVisible = this.setModalVisible.bind(this)
  }
  // state = {
  //   modalVisible: false
  // }

  setModalVisible (visible) {
    this.setState({ modalVisible: visible })
  }

  renderResult () {
    const searchString = path(['navigation', 'state', 'params', 'searchString'], this.props)
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: '#fff' }}>
          <View style={{ flexDirection: 'row', width: '100%', height: '100%', alignContent: 'center', justifyContent: 'center' }}>
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ marginRight: 0, height: '100%', width: 40, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name='arrow-back' style={{ color: '#000', width: 20 }} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, height: '100%', justifyContent: 'center' }}>
              <SearchBar
                search={searchString} onChangeText={() => {}} style={{ height: 40 }} onSubmitEditing={() => {}} autoFocus={false} onFocus={() => this.props.navigation.navigate('ScreenSearchProperty', { searchString })}
              />
            </View>
          </View>
        </Header>
        <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#cdcdcd' }} onPress={() => this.setModalVisible(true)}>
            <View style={{ flexDirection: 'row' }}><Icon name='sliders' type='FontAwesome' style={{ color: '#000' }} /><Text style={{ marginLeft: 10 }}>Filter</Text></View>
          </TouchableOpacity>
          <View style={{ width: 1, backgroundColor: '#000', marginTop: 10, marginBottom: 10 }} />
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#cdcdcd' }} onPress={() => {
              ActionSheet.show(
                {
                  options: BUTTONS,
                  // cancelButtonIndex: CANCEL_INDEX,
                  // destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: 'Sort By'
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] })
                }
              )
            }}
          >
            <View style={{ flexDirection: 'row' }}><Icon name='reorder' type='FontAwesome' style={{ color: '#000' }} /><Text style={{ marginLeft: 10 }}>Sort</Text></View>
          </TouchableOpacity>
        </View>
        <Content padder horizontal>
          <Text>Search Result</Text>
        </Content>
        <Modal
          animationType='slide'
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.')
            this.setModalVisible(false)
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Component Filter sedang didevelop</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(false)
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </Container>
    )
  }

  render () {
    return this.renderResult()
  }
}

export default ScreenResultSearchProperty
