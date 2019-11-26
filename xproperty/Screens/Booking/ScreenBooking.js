import React, { Component } from 'react'
import { ImageBackground, StyleSheet, View, Platform } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Form, Text, Item, Input, Label, Textarea } from 'native-base'
import Autocomplete from './Autocomplete'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Images } from '../../Themes'
import FormSignup from '../../Containers/Signup/FormSignup'

export default class ScreenSingup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {},
      formSent: false
    }
  }

  getAutocompleteStyle (i) {
    return Platform.OS === 'ios' ? { top: 80 * i, zIndex: 100 - i } : { marginBottom: 10 }
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
            <Form>
              <Autocomplete inputTextStyle={styles.inputTextStyle} style={this.getAutocompleteStyle(0)} placeholder='Full name' fieldLabel='Full Name' />
              <Autocomplete inputTextStyle={styles.inputTextStyle} style={this.getAutocompleteStyle(1)} placeholder='Customer Code' fieldLabel='Customer Code' />
              <Autocomplete inputTextStyle={styles.inputTextStyle} style={this.getAutocompleteStyle(2)} placeholder='KTP' fieldLabel='KTP' />
              <View style={{ marginTop: Platform.OS === 'ios' ? 240 : 0 }} />
              <Label style={styles.fieldLabel}>Phone Number</Label>
              <Input style={styles.inputTextStyle} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' />
              <Label style={styles.fieldLabel}>NPWP</Label>
              <Input style={styles.inputTextStyle} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' />
              <Label style={styles.fieldLabel}>Address</Label>
              <Textarea style={{ backgroundColor: '#fff' }} rowSpan={5} bordered placeholder='Address' />
              <Button block style={{ margin: 15 }} onPress={() => this.props.navigation.navigate('ScreenListPaymentPlan')}>
                <Text>Submit</Text>
              </Button>
            </Form>
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  autocompleteIos: {
  },
  inputTextStyle: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#cdcdcd',
    borderWidth: 1,
    fontSize: 15,
    marginBottom: 10
  },
  fieldLabel: {}
})
