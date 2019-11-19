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
import { isIphoneX } from '../../Lib/helper/platform'
import Swiper from './Swiper'
import Footer from '../../Containers/Footer'
import { Images, Metrics, Colors } from '../../Themes'
import UserProfile from './UserProfile'

const styles = {
  container: {
    backgroundColor: '#fff'
  },
  backgroundImg: {
    flex: 1,
    width: Metrics.screenWidth
  }
}
class ScreenHome extends Component {
  render () {
    return (
      <Container>
        <ImageBackground source={Images.backgroundXpay} style={{ flex: 1, width: '100%' }}>
          <Header>
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
          <Content contentContainerStyle={{ flex: 1 }}>
            <View style={{ flex: 1, height: 250 }}>
              <Swiper />
            </View>
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
              <Grid>
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
            </View>
          </Content>
        </ImageBackground>
        <Footer />
      </Container>
    )
  }
}

export default ScreenHome
