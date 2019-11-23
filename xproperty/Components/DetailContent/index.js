import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
import Carousel from '../Carousel'
const logo = Images.logo
class DetailContent extends Component {
  static propTypes = {
    // addedStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    // size: PropTypes.string
    title: PropTypes.string,
    description: PropTypes.string
  }

  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  render () {
    return (
      <View>
        <View style={{ height: 300 }}>
          <Carousel />
        </View>
        <Text style={{ alignSelf: 'center', margin: 10 }}>{this.props.title}</Text>
        <View style={{ padding: 30 }}>
          <MapView
            style={{ height: 300, width: '100%' }}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          />
        </View>
        <Card>
          <CardItem bordered>
            <Left>
              <Thumbnail source={logo} />
              <Body>
                <Text>{this.props.title}</Text>
                <Text note>Jl. Benyamin Sueb No. 21, Kemayoran, Jakarta Utara</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={{ alignSelf: 'center', marginBottom: 5 }}>Description</Text>
              <Text note>{this.props.description}</Text>
            </Body>
          </CardItem>
          {/* <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon name='logo-github' />
                  <Text>4,923 stars</Text>
                </Button>
              </Left>
            </CardItem> */}
        </Card>
      </View>
    )
  }
}

export default DetailContent
