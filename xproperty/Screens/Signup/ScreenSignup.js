import React, { Component } from 'react'
import { ImageBackground } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content } from 'native-base'
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
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange (name, value) {
  //   this.setState({ form: { ...this.state.form, [name]: value } })
  // }

  // handleSubmit () {
  //   console.log('submit form ', this.state.form)
  // }

  render () {
    return (
      <Container>
        <ImageBackground source={Images.backgroundXpay} style={{width: '100%', height: '100%' }}>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Signup</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            {
              !this.state.formSent && (
                <FormSignup
                  onSuccessSubmit={() => this.setState({ formSent: true })}
                />
              )
            }
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}