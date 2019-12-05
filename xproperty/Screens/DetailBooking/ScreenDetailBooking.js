import React, { Component } from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right
} from 'native-base'
import styles from './styles'

class ScreenDetailBooking extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Detail Booking</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header>
              <Text>Detail booking</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  List Detail booking disini
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button block style={{ margin: 15 }} onPress={() => this.props.navigation.navigate('ScreenPayment')}>
            <Text>Do Payment</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default ScreenDetailBooking
