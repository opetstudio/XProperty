import React, { Component } from 'react'
import { ImageBackground } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content } from 'native-base'
import FormBooking from '../../Containers/Booking/FormBooking'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Images } from '../../Themes'

export default class ScreenSingup extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Container>
        <ImageBackground source={Images.backgroundXpay} style={{ width: '100%', height: '100%' }}>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Booking</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <FormBooking />
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}
