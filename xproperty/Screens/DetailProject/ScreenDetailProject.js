import React, { Component } from 'react'
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Icon,
  Button,
  Title,
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text
} from 'native-base'
// import { Grid, Row, Col } from 'react-native-easy-grid'
import { StatusBar, Image, View } from 'react-native'
import { Images } from '../../Themes'
import Carousel from '../../Components/Carousel'

const cardImage = Images.cardImage2
class ScreenDetailProject extends Component {
  render () {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header>
          <StatusBar barStyle='light-content' />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Detail Project</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{ height: 300 }}>
            <Carousel />
          </View>
        </Content>
      </Container>
    )
  }
}

export default ScreenDetailProject
