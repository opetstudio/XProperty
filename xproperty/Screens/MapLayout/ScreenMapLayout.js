import React, { Component } from 'react'
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
  ScrollView, Modal, TouchableHighlight, View, Alert
} from 'react-native'
import ImageMapper from 'react-native-image-mapper'
import { Images } from '../../Themes'
import { RECTANGLE_MAP } from './Maps'

const HumanImg = Images.clusterMapLayout
// const HumanImg = Images.human

export default class ScreenMapLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedAreaId: []
    }
  }

  mainImgWasPressed (item, idx, event) {
    console.log('Main')
    const { selectedAreaId } = this.state
    if (Array.isArray(selectedAreaId)) {
      const indexInState = selectedAreaId.indexOf(item.id)
      if (indexInState !== -1) {
        console.log('Removing id', item.id)
        this.setState({
          selectedAreaId: [
            ...selectedAreaId.slice(0, indexInState),
            ...selectedAreaId.slice(indexInState + 1)
          ]
        })
      } else {
        console.log('Setting Id', item.id)
        this.setState({ selectedAreaId: [...selectedAreaId, item.id] })
      }
    } else {
      if (item.id === selectedAreaId) {
        this.setState({ selectedAreaId: null })
      } else {
        this.setState({ selectedAreaId: item.id })
      }
    }
    Alert.alert('Click Unit')
  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Map Layout</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <View style={{ flex: 1 }}>
            <ImageMapper
              imgHeight={551}
              imgWidth={244}
              imgSource={HumanImg}
              imgMap={RECTANGLE_MAP}
              onPress={(item, idx, event) => this.mainImgWasPressed(item, idx, event)}
              containerStyle={{ top: 10 }}
              selectedAreaId={this.state.selectedAreaId}
              multiselect
            />
          </View>
        </Content>
      </Container>
    )
  }
}
