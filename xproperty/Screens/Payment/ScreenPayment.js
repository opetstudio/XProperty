import React, { Component } from 'react'
import { ImageBackground, StyleSheet, View, Platform } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Form, Text, Item, Input, Label, Textarea, DatePicker, Picker, Spinner } from 'native-base'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Images } from '../../Themes'
import PaymentMethod from '../../Containers/Payment/PaymentMethod'

const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
const years = ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032']
export default class ScreenPayment extends Component {
  render () {
    return (
      <Container>
        {/* <ImageBackground source={Images.backgroundXpay} style={{ width: '100%', height: '100%' }}> */}
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Payment</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text style={{ marginBottom: 10 }}>Payment Method:</Text>
          <PaymentMethod />
        </Content>
        {/* </ImageBackground> */}
      </Container>
    )
  }
}
