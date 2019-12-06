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
import { ImageBackground, View, StatusBar, Platform } from 'react-native'
import Carousel from '../../Components/Carousel'
import Footer from '../../Containers/Footer'
import { Images } from '../../Themes'

class ScreenHome extends Component {
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
            <Button transparent>
              <Icon name='search' />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{ height: 300 }}>
            <Carousel />
          </View>
          <Grid>
            <Row style={{ paddingBottom: 5 }}>
              <Col onPress={() => this.props.navigation.navigate('ScreenListProjects')} style={{ alignItems: 'center', paddingHorizontal: 3, backgroundColor: '#cdcdcd', margin: 5, padding: 5 }}>
                <Icon type='FontAwesome5' name='project-diagram' style={{ color: '#999', fontSize: 90 }} />
                <Text numberOfLines={1} style={{ fontSize: 14 }}>
                  All Projects
                </Text>
              </Col>
              <Col onPress={() => {}} style={{ alignItems: 'center', paddingHorizontal: 3, backgroundColor: '#cdcdcd', margin: 5, padding: 5 }}>
                <Icon name='bookmark' style={{ color: '#999', fontSize: 90 }} />
                <Text numberOfLines={1} style={{ fontSize: 14 }}>
                  Bookmark
                </Text>
              </Col>
              <Col onPress={() => {}} style={{ alignItems: 'center', paddingHorizontal: 3, backgroundColor: '#cdcdcd', margin: 5, padding: 5 }}>
                <Icon name='download' style={{ color: '#999', fontSize: 90 }} />
                <Text numberOfLines={1} style={{ fontSize: 14 }}>
                  Download
                </Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 5 }}>
              <Col onPress={() => this.props.navigation.navigate('ScreenListBooking')} style={{ alignItems: 'center', paddingHorizontal: 3, backgroundColor: '#cdcdcd', margin: 5, padding: 5 }}>
                <Icon name='book' style={{ color: '#999', fontSize: 90 }} />
                <Text numberOfLines={1} style={{ fontSize: 14 }}>
                  My Booking
                </Text>
              </Col>
              <Col onPress={() => {}} style={{ alignItems: 'center', paddingHorizontal: 3, margin: 5, padding: 5 }}>
                {/* <Icon name="logo-apple" style={{ color: "#999", fontSize: 90 }} />
                <Text numberOfLines={1} style={{fontSize: 14}}>
                  Customer
                </Text> */}
              </Col>
              <Col onPress={() => {}} style={{ alignItems: 'center', paddingHorizontal: 3, backgroundColor: '#cdcdcd', margin: 5, padding: 5 }}>
                <Icon name='users' type='FontAwesome5' style={{ color: '#999', fontSize: 90 }} />
                <Text numberOfLines={1} style={{ fontSize: 14 }}>
                Customer
                </Text>
              </Col>
            </Row>
          </Grid>
        </Content>
        <Footer />
      </Container>
    )
  }
}

export default ScreenHome
