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
import MapView from 'react-native-maps'
import { Images } from '../../Themes'
import Carousel from '../../Components/Carousel'

const cardImage = Images.cardImage2
const logo = Images.logo
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
          <Text style={{ alignSelf: 'center', margin: 10 }}>Project SatuDua Tiga Empatlima enamtujuh</Text>
          <MapView
            style={{ height: 300, width: '100%' }}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          />
          <Card>
            <CardItem bordered>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>Project SatuDua Tiga Empatlima enamtujuh</Text>
                  <Text note>Jl. Benyamin Sueb No. 21, Kemayoran, Jakarta Utara</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{ alignSelf: 'center', marginBottom: 5 }}>Description</Text>
                <Text note>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon name='logo-github' />
                  <Text>4,923 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

        </Content>
      </Container>
    )
  }
}

export default ScreenDetailProject
