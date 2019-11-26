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

export default class ScreenMapLayout extends Component {
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
          <Text>View Map</Text>
        </Content>
      </Container>
    )
  }
}
