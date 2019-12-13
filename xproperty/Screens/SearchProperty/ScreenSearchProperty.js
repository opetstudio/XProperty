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
  Input
} from 'native-base'
import {
  ScrollView, Modal, TouchableHighlight, TouchableOpacity, View, Alert
} from 'react-native'
import { ListItem } from 'react-native-elements'
import ListSearchHistoryString from '../../Containers/Search/ListSearchHistoryString'
import SearchBar from '../../Containers/Search/SearchBar'

import styles from './styles'

const list = [
  {
    title: 'Rumah dijual murah area Menteng DKI Jakarta',
    icon: 'history'
  },
  {
    title: 'Apartment disewakan murah area Slipi Petamburan',
    icon: 'history'
  }
]
class ScreenSearchProperty extends Component {
  constructor (props) {
    super(props)
    const searchString = path(['navigation', 'state', 'params', 'searchString'], this.props)
    this.state = {
      modalVisible: false,
      search: searchString
    }
    this.setModalVisible = this.setModalVisible.bind(this)
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this)
    this.handleOnSubmitEditing = this.handleOnSubmitEditing.bind(this)
  }
  // state = {
  //   modalVisible: false
  // }

  handleUpdateSearch = search => {
    this.setState({ search })
  }

  handleOnSubmitEditing (searchString) {
    this.props.navigation.replace('ScreenResultSearchProperty', { searchString })
  }

  setModalVisible (visible) {
    this.setState({ modalVisible: visible })
  }

  render () {
    console.log('props=====>>>>', this.props)
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
                search={this.state.search} onChangeText={this.handleUpdateSearch} style={{ height: 40 }} onSubmitEditing={this.handleOnSubmitEditing} autoFocus onFocus={() => {}}
              />
            </View>
          </View>
        </Header>
        <Content padder>
          <ListSearchHistoryString
            onItemPress={this.handleOnSubmitEditing}
          />
        </Content>
      </Container>
    )
  }
}

export default ScreenSearchProperty
