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
import { Col, Row, Grid } from 'react-native-easy-grid'
import { StatusBar, Image, View } from 'react-native'
import MapView from 'react-native-maps'
import { Images } from '../../Themes'
import Carousel from '../../Components/Carousel'
import DetailContent from '../../Components/DetailContent'
const logo = Images.logo

class ScreenDetailProject extends Component {
  render () {
    console.log('render ScreenDetailProject', this.props)
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
        <Content ref={c => (this.component = c)}>
          <DetailContent
            title='Project SatuDua Tiga Empatlima enamtujuh'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />
          <Button block primary style={{ margin: 20 }} onPress={() => this.props.navigation.navigate('ScreenListClusters')}>
            <Text>View All Clusters</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default ScreenDetailProject
