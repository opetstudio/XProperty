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
  Text
} from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { ImageBackground, View, StatusBar, Platform, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Carousel from '../../Components/Carousel'
import Footer from '../../Containers/Footer'
import { Images } from '../../Themes'

class ScreenHome extends Component {
  renderBottom () {
    return (
      <View style={{ width: 200, height: 100 }}>
        <Image source={Images.homeBackground} style={{ height: 100, width: '100%' }} resizeMode='stretch' />
      </View>)
  }

  render () {
    return (
      <Container style={{ backgroundColor: '#fff' }}>

        <Header>
          {Platform.OS === 'android' && <StatusBar barStyle='light-content' />}
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
            <Button onPress={() => this.props.navigation.navigate('ScreenSearchProperty')} transparent>
              <Icon name='search' />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{ height: 300 }}>
            <Carousel />
          </View>
          <Grid style={{marginBottom: 10}}>
            <Row style={{ paddingBottom: 5, height: 130 }}>
              <Col onPress={() => this.props.navigation.navigate('ScreenListProjects')} style={{ margin: 5 }}>
                <LinearGradient colors={['#fff', '#cdcdcd', '#fff']} style={{ padding: 10, alignItems: 'center', borderWidth: 2, borderColor: '#cdcdcd' }}>
                  <Icon type='FontAwesome5' name='project-diagram' style={{ color: '#000', fontSize: 70 }} />
                  <Text numberOfLines={1} style={{ fontSize: 14, color: '#000' }}>
                          All Projects
                  </Text>
                </LinearGradient>
              </Col>
              <Col onPress={() => this.props.navigation.navigate('ScreenListProjects')} style={{ margin: 5 }}>
                <LinearGradient colors={['#fff', '#cdcdcd', '#fff']} style={{ padding: 10, alignItems: 'center', borderWidth: 2, borderColor: '#cdcdcd' }}>
                  <Icon type='FontAwesome5' name='bookmark' style={{ color: '#000', fontSize: 70 }} />
                  <Text numberOfLines={1} style={{ fontSize: 14, color: '#000' }}>
                          Bookmark
                  </Text>
                </LinearGradient>
              </Col>
              <Col onPress={() => {}} style={{ margin: 5 }}>
                <LinearGradient colors={['#fff', '#cdcdcd', '#fff']} style={{ padding: 10, alignItems: 'center', borderWidth: 2, borderColor: '#cdcdcd' }}>
                  <Icon type='FontAwesome5' name='download' style={{ color: '#000', fontSize: 70 }} />
                  <Text numberOfLines={1} style={{ fontSize: 14, color: '#000' }}>
                          Download
                  </Text>
                </LinearGradient>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 5, height: 130 }}>
              <Col onPress={() => this.props.navigation.navigate('ScreenListBooking')} style={{ margin: 5 }}>
                <LinearGradient colors={['#fff', '#cdcdcd', '#fff']} style={{ padding: 10, alignItems: 'center', borderWidth: 2, borderColor: '#cdcdcd' }}>
                  <Icon type='FontAwesome5' name='book' style={{ color: '#000', fontSize: 70 }} />
                  <Text numberOfLines={1} style={{ fontSize: 14 }}>
                          My Booking
                  </Text>
                </LinearGradient>
              </Col>
              <Col onPress={() => this.props.navigation.navigate('ScreenSearchProperty')} style={{ margin: 5 }}>
                <LinearGradient colors={['#fff', '#cdcdcd', '#fff']} style={{ padding: 10, alignItems: 'center', borderWidth: 2, borderColor: '#cdcdcd' }}>
                  <Icon name='search' type='FontAwesome5' style={{ color: '#000', fontSize: 70 }} />
                  <Text numberOfLines={1} style={{ fontSize: 14 }}>
                        Search
                  </Text>
                </LinearGradient>
              </Col>
              <Col onPress={() => {}} style={{ margin: 5 }}>
                <LinearGradient colors={['#fff', '#cdcdcd', '#fff']} style={{ padding: 10, alignItems: 'center', borderWidth: 2, borderColor: '#cdcdcd' }}>
                  <Icon name='users' type='FontAwesome5' style={{ color: '#000', fontSize: 70 }} />
                  <Text numberOfLines={1} style={{ fontSize: 14 }}>
                        Customer
                  </Text>
                </LinearGradient>
              </Col>
            </Row>
          </Grid>
        </Content>
        <LinearGradient colors={['#fff', '#141e30']} style={{position: 'absolute', bottom: 60, height: 350, width: '200%', zIndex: -1, flexDirection: 'column-reverse' }}>
          <View style={{ flexDirection: 'row', height: 80 }}>
            {this.renderBottom()}
            {this.renderBottom()}
            {this.renderBottom()}
            {this.renderBottom()}
            {this.renderBottom()}
          </View>
        </LinearGradient>

        <Footer />
      </Container>
    )
  }
}

export default ScreenHome
