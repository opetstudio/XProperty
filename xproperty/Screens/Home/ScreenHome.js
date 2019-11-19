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
  Title
} from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { ImageBackground, View, StatusBar } from 'react-native'
import Carousel from '../../Components/Carousel'
import Footer from '../../Containers/Footer'
import { Images } from '../../Themes'

class ScreenHome extends Component {
  render () {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header>
          <StatusBar barStyle='light-content' />
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name='ios-menu' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{ height: 300 }}>
            <Carousel />
          </View>
          <Grid style={{ minHeight: 400 }}>
            <Col>
              <Row style={{ backgroundColor: '#00CE9F' }} />
              <Row style={{ backgroundColor: '#635DB7' }} />
              <Row style={{ backgroundColor: '#00CE9F' }} />
            </Col>
            <Col>
              <Row style={{ backgroundColor: '#635DB7' }} />
              <Row style={{ backgroundColor: '#00CE9F' }} />
              <Row style={{ backgroundColor: '#635DB7' }} />
            </Col>
          </Grid>
        </Content>
        <Footer />
      </Container>
    )
  }
}

export default ScreenHome
